// Safe Stremio integration layer.
// Only official/whitelisted addons are used, and streams are limited to browser-playable direct URLs.
(function () {
    const PROXY_BASE = '/proxy/v2/';
    const CINEMETA_BASE = 'https://v3-cinemeta.strem.io';
    const OPENSUBTITLES_BASE = 'https://opensubtitles-v3.strem.io';
    // Keep this list intentionally empty until an addon passes direct URL validation.
    // Torrent/infoHash-only addons are not browser-playable and are rejected by design.
    const DIRECT_STREAM_ADDONS = [];
    const CACHE_TTL = 24 * 60 * 60 * 1000;

    function readCache() {
        try {
            return JSON.parse(sessionStorage.getItem('stremioServicesCache') || '{}');
        } catch (error) {
            return {};
        }
    }

    function writeCache(cache) {
        try {
            sessionStorage.setItem('stremioServicesCache', JSON.stringify(cache));
        } catch (error) {
            // Best effort cache only.
        }
    }

    async function fetchJson(url, options = {}) {
        const cacheKey = url;
        const cache = readCache();
        const cached = cache[cacheKey];
        if (cached && Date.now() - cached.cachedAt < (options.ttl || CACHE_TTL)) {
            return cached.data;
        }

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), options.timeoutMs || 7000);
        try {
            const proxiedUrl = window.ProxyAuth?.addAuthToProxyUrl
                ? await window.ProxyAuth.addAuthToProxyUrl(PROXY_BASE + encodeURIComponent(url))
                : PROXY_BASE + encodeURIComponent(url);
            const response = await fetch(proxiedUrl, {
                cache: 'no-cache',
                signal: controller.signal,
                headers: {
                    accept: 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Stremio request failed: ${response.status}`);
            }
            const data = await response.json();
            cache[cacheKey] = { cachedAt: Date.now(), data };
            writeCache(cache);
            return data;
        } finally {
            clearTimeout(timeoutId);
        }
    }

    function isDirectPlayableUrl(url) {
        return /^https?:\/\//i.test(String(url || '')) && /\.(m3u8|mp4|m4v|webm|mov|ogv|ogg)(\?|#|$)/i.test(String(url));
    }

    function normalizeText(value) {
        return String(value || '')
            .toLowerCase()
            .replace(/[《》「」『』"'“”‘’()[\]（）【】\s:：·._-]+/g, '');
    }

    function getMetaNameScore(meta, query) {
        const name = normalizeText(meta?.name);
        const normalizedQuery = normalizeText(query);
        if (!name || !normalizedQuery) return 0;
        if (name === normalizedQuery) return 100;
        if (name.includes(normalizedQuery) || normalizedQuery.includes(name)) return 70;
        return 20;
    }

    async function searchCinemeta(query, type = 'movie') {
        const url = `${CINEMETA_BASE}/catalog/${encodeURIComponent(type)}/top/search=${encodeURIComponent(query)}.json`;
        const data = await fetchJson(url, { ttl: 12 * 60 * 60 * 1000 });
        return Array.isArray(data?.metas) ? data.metas : [];
    }

    async function getBestCinemetaMeta(title) {
        if (!title) return null;
        const movieResults = await searchCinemeta(title, 'movie').catch(() => []);
        const seriesResults = await searchCinemeta(title, 'series').catch(() => []);
        const candidates = [...movieResults, ...seriesResults]
            .filter(meta => /^tt\d+$/i.test(meta?.id || meta?.imdb_id || ''))
            .sort((a, b) => getMetaNameScore(b, title) - getMetaNameScore(a, title));
        if (!candidates.length) return null;

        const best = candidates[0];
        const type = best.type || 'movie';
        const imdbId = best.id || best.imdb_id;
        const detailUrl = `${CINEMETA_BASE}/meta/${encodeURIComponent(type)}/${encodeURIComponent(imdbId)}.json`;
        const detail = await fetchJson(detailUrl, { ttl: 7 * 24 * 60 * 60 * 1000 }).catch(() => null);
        return detail?.meta || best;
    }

    function enhanceVideoInfo(videoInfo, meta) {
        if (!meta) return videoInfo || {};
        const info = { ...(videoInfo || {}) };
        info.title = info.title || meta.name;
        info.cover = info.cover || meta.poster;
        info.desc = info.desc || meta.description;
        info.type = info.type || (Array.isArray(meta.genres) ? meta.genres.join(' / ') : meta.genre?.join?.(' / '));
        info.year = info.year || meta.year || meta.releaseInfo;
        info.area = info.area || meta.country;
        info.director = info.director || (Array.isArray(meta.director) ? meta.director.join(' / ') : meta.director);
        info.actor = info.actor || (Array.isArray(meta.cast) ? meta.cast.slice(0, 8).join(' / ') : meta.cast);
        if (meta.imdbRating && !String(info.remarks || '').includes('IMDb')) {
            info.remarks = [info.remarks, `IMDb ${meta.imdbRating}`].filter(Boolean).join(' · ');
        }
        info.stremio_imdb_id = meta.imdb_id || meta.id || '';
        info.stremio_type = meta.type || 'movie';
        return info;
    }

    async function getDirectStreams(meta) {
        const imdbId = meta?.imdb_id || meta?.id;
        const type = meta?.type || 'movie';
        if (!/^tt\d+$/i.test(String(imdbId || ''))) return [];

        const streamGroups = await Promise.all(DIRECT_STREAM_ADDONS.map(async addon => {
            const url = `${addon.baseUrl}/stream/${encodeURIComponent(type)}/${encodeURIComponent(imdbId)}.json`;
            const data = await fetchJson(url, { ttl: 24 * 60 * 60 * 1000 }).catch(() => null);
            const streams = Array.isArray(data?.streams) ? data.streams : [];
            return streams
                .filter(stream => isDirectPlayableUrl(stream?.url))
                .map((stream, index) => ({
                    url: stream.url,
                    title: stream.title || stream.name || `${addon.name} ${index + 1}`,
                    sourceName: addon.name,
                    addonId: addon.id
                }));
        }));

        return streamGroups.flat();
    }

    function getSubtitleScore(subtitle) {
        const lang = String(subtitle?.lang || '').toLowerCase();
        if (['zho', 'chi', 'chs', 'cht', 'zh', 'cn'].includes(lang)) return 100;
        if (['eng', 'en'].includes(lang)) return 70;
        return 10;
    }

    async function getSubtitles(meta, options = {}) {
        const imdbId = meta?.imdb_id || meta?.id;
        const type = meta?.type || 'movie';
        if (!/^tt\d+$/i.test(String(imdbId || ''))) return [];
        const url = `${OPENSUBTITLES_BASE}/subtitles/${encodeURIComponent(type)}/${encodeURIComponent(imdbId)}.json`;
        const data = await fetchJson(url, { ttl: 6 * 60 * 60 * 1000 }).catch(() => null);
        const preferred = options.preferredLangs || ['zho', 'chi', 'chs', 'cht', 'zh', 'cn', 'eng', 'en'];
        const preferredSet = new Set(preferred.map(lang => String(lang).toLowerCase()));
        return (Array.isArray(data?.subtitles) ? data.subtitles : [])
            .filter(subtitle => subtitle?.url && preferredSet.has(String(subtitle.lang || '').toLowerCase()))
            .sort((a, b) => getSubtitleScore(b) - getSubtitleScore(a))
            .slice(0, options.limit || 8)
            .map(subtitle => ({
                id: subtitle.id,
                url: subtitle.url,
                lang: subtitle.lang || 'und',
                label: `${subtitle.lang || '字幕'} #${subtitle.id || ''}`.trim()
            }));
    }

    async function getEnhancementByTitle(title) {
        const meta = await getBestCinemetaMeta(title);
        if (!meta) {
            return { meta: null, subtitles: [], directStreams: [] };
        }
        const [subtitles, directStreams] = await Promise.all([
            getSubtitles(meta).catch(() => []),
            getDirectStreams(meta).catch(() => [])
        ]);
        return { meta, subtitles, directStreams };
    }

    window.StremioServices = {
        searchCinemeta,
        getBestCinemetaMeta,
        enhanceVideoInfo,
        getDirectStreams,
        getSubtitles,
        getEnhancementByTitle,
        isDirectPlayableUrl
    };
})();

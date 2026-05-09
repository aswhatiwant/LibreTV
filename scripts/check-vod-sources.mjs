#!/usr/bin/env node
import fs from 'node:fs';
import vm from 'node:vm';

const DEFAULT_QUERIES = ['庆余年', '哪吒', '肖申克'];
const REQUEST_TIMEOUT_MS = Number(process.env.TIMEOUT_MS || 12000);
const QUERIES = (process.env.QUERIES || DEFAULT_QUERIES.join(','))
    .split(',')
    .map(item => item.trim())
    .filter(Boolean);

function loadConfig() {
    const code = fs.readFileSync(new URL('../js/config.js', import.meta.url), 'utf8');
    const context = {
        window: {},
        console,
        URLSearchParams,
        fetch: async () => {
            throw new Error('fetch is disabled while loading config');
        }
    };
    vm.createContext(context);
    vm.runInContext(code, context, { filename: 'js/config.js' });
    return {
        apiSites: context.window.API_SITES || {}
    };
}

async function fetchJson(url) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
    try {
        const response = await fetch(url, {
            signal: controller.signal,
            headers: {
                accept: 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        return await response.json();
    } finally {
        clearTimeout(timeoutId);
    }
}

function isDirectPlayableUrl(url) {
    return /\.(m3u8|mp4|webm|m4v|mov|ogv|ogg)(\?|#|$)/i.test(url);
}

function extractEpisodeUrls(playSource) {
    return String(playSource || '').split('#').map(ep => {
        const parts = ep.split('$');
        return parts.length > 1 ? parts.slice(1).join('$').trim() : '';
    }).filter(url => url && /^https?:\/\//i.test(url));
}

function extractPlayableEpisodes(vodPlayUrl) {
    const groups = String(vodPlayUrl || '').split('$$$')
        .map(extractEpisodeUrls)
        .filter(urls => urls.length > 0);

    if (groups.length === 0) {
        return [];
    }

    const directGroups = groups
        .map(urls => ({
            urls: urls.filter(isDirectPlayableUrl),
            m3u8Count: urls.filter(url => /\.m3u8(\?|#|$)/i.test(url)).length
        }))
        .filter(group => group.urls.length > 0)
        .sort((a, b) => (b.m3u8Count - a.m3u8Count) || (b.urls.length - a.urls.length));

    if (directGroups.length > 0) {
        return directGroups[0].urls;
    }

    return groups[0];
}

function buildSearchUrl(sourceInfo, query) {
    return `${sourceInfo.api}?ac=videolist&wd=${encodeURIComponent(query)}`;
}

function buildDetailUrl(sourceInfo, id) {
    return `${sourceInfo.api}?ac=videolist&ids=${encodeURIComponent(id)}`;
}

async function checkSource(source, sourceInfo) {
    const samples = [];
    for (const query of QUERIES) {
        try {
            const searchData = await fetchJson(buildSearchUrl(sourceInfo, query));
            const firstResult = Array.isArray(searchData?.list) ? searchData.list[0] : null;
            if (!firstResult?.vod_id) {
                samples.push({ query, ok: false, stage: 'search', message: 'no results' });
                continue;
            }

            const detailData = await fetchJson(buildDetailUrl(sourceInfo, String(firstResult.vod_id)));
            const videoDetail = Array.isArray(detailData?.list) ? detailData.list[0] : null;
            const episodes = videoDetail?.vod_play_url && typeof extractPlayableEpisodes === 'function'
                ? extractPlayableEpisodes(videoDetail.vod_play_url)
                : [];
            samples.push({
                query,
                ok: episodes.length > 0,
                stage: episodes.length > 0 ? 'detail' : 'stream',
                title: firstResult.vod_name || '',
                episodes: episodes.length,
                message: episodes.length > 0 ? 'ok' : 'no playable episodes'
            });
        } catch (error) {
            samples.push({
                query,
                ok: false,
                stage: 'request',
                message: error.name === 'AbortError' ? 'timeout' : error.message
            });
        }
    }

    const playableSamples = samples.filter(sample => sample.ok).length;
    return {
        source,
        name: sourceInfo.name || source,
        ok: playableSamples > 0,
        playableSamples,
        totalSamples: samples.length,
        samples
    };
}

const { apiSites } = loadConfig();
const sources = Object.entries(apiSites)
    .filter(([, site]) => !site.adapter)
    .map(([source, sourceInfo]) => [source, sourceInfo]);

const results = [];
for (const [source, sourceInfo] of sources) {
    process.stdout.write(`checking ${sourceInfo.name || source} (${source})... `);
    const result = await checkSource(source, sourceInfo);
    results.push(result);
    process.stdout.write(result.ok ? `ok ${result.playableSamples}/${result.totalSamples}\n` : 'failed\n');
}

const good = results.filter(result => result.ok);
const bad = results.filter(result => !result.ok);

console.log('\nSummary');
console.log('mode: direct upstream API');
console.log(`queries: ${QUERIES.join(', ')}`);
console.log(`usable sources: ${good.length}/${results.length}`);

if (bad.length > 0) {
    console.log('\nUnusable sources');
    bad.forEach(result => {
        const reasons = result.samples.map(sample => `${sample.query}:${sample.message}`).join('; ');
        console.log(`- ${result.source} ${result.name}: ${reasons}`);
    });
}

if (good.length === 0) {
    process.exit(1);
}

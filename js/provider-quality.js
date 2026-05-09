// Stremio-style provider capability and quality hints for LibreTV sources.
// This keeps source quality decisions centralized instead of scattering source-specific rules.
(function () {
    const DEFAULT_PROFILE = {
        priority: 50,
        capability: 'vod',
        playable: 'unknown',
        poster: 'unknown',
        stability: 'unknown',
        notes: ''
    };

    const PROVIDER_PROFILES = {
        bfzy: {
            priority: 94,
            playable: 'good',
            poster: 'good',
            stability: 'good',
            notes: '默认高优先级综合源'
        },
        ruyi: {
            priority: 92,
            playable: 'good',
            poster: 'good',
            stability: 'good',
            notes: '默认高优先级综合源'
        },
        ffzy: {
            priority: 90,
            playable: 'good',
            poster: 'good',
            stability: 'good',
            notes: '默认高优先级综合源'
        },
        jisu: {
            priority: 88,
            playable: 'good',
            poster: 'good',
            stability: 'good',
            notes: '默认高优先级综合源'
        },
        wujin: {
            priority: 86,
            playable: 'good',
            poster: 'good',
            stability: 'good',
            notes: '默认高优先级综合源'
        },
        lzi: {
            priority: 84,
            playable: 'good',
            poster: 'good',
            stability: 'good',
            notes: '默认高优先级综合源'
        },
        dyttzy: {
            priority: 82,
            playable: 'good',
            poster: 'good',
            stability: 'good',
            notes: '默认影视源'
        },
        baidu: {
            priority: 80,
            playable: 'good',
            poster: 'mixed',
            stability: 'good',
            notes: '默认影视源'
        },
        zy360: {
            priority: 78,
            playable: 'good',
            poster: 'mixed',
            stability: 'good',
            notes: '播放可用，海报依赖代理兜底'
        },
        dbzy: {
            priority: 74,
            playable: 'mixed',
            poster: 'mixed',
            stability: 'mixed',
            notes: '可作为补充源'
        },
        wolong: {
            priority: 72,
            playable: 'mixed',
            poster: 'mixed',
            stability: 'mixed',
            notes: '可作为补充源'
        },
        ikun: {
            priority: 70,
            playable: 'mixed',
            poster: 'mixed',
            stability: 'mixed',
            notes: '可作为补充源'
        },
        mdzy: {
            priority: 68,
            playable: 'mixed',
            poster: 'mixed',
            stability: 'mixed',
            notes: '可作为补充源'
        },
        zuid: {
            priority: 66,
            playable: 'mixed',
            poster: 'mixed',
            stability: 'mixed',
            notes: '可作为补充源'
        },
        wwzy: {
            priority: 45,
            playable: 'unknown',
            poster: 'unknown',
            stability: 'unknown',
            notes: '短剧补充源'
        }
    };

    function normalizeText(value) {
        return String(value || '')
            .toLowerCase()
            .replace(/^file:/i, '')
            .replace(/[《》「」『』"'“”‘’()[\]（）【】\s:：·._-]+/g, '');
    }

    function getRelevanceScore(item, query) {
        const title = normalizeText(item?.vod_name);
        const normalizedQuery = normalizeText(query);
        if (!title || !normalizedQuery) return 0;
        if (title === normalizedQuery) return 120;
        if (title.startsWith(normalizedQuery)) return 100;
        if (title.includes(normalizedQuery)) return 80;
        if (normalizedQuery.includes(title) && title.length >= 2) return 55;
        return 0;
    }

    function getProviderProfile(sourceCode) {
        if (!sourceCode) return { ...DEFAULT_PROFILE };
        if (String(sourceCode).startsWith('custom_')) {
            return {
                ...DEFAULT_PROFILE,
                priority: 35,
                notes: '用户自定义源'
            };
        }
        return {
            ...DEFAULT_PROFILE,
            ...(PROVIDER_PROFILES[sourceCode] || {})
        };
    }

    function getSignalScore(value) {
        if (value === 'good') return 14;
        if (value === 'mixed') return 5;
        if (value === 'poor') return -12;
        return 0;
    }

    function hasUsablePoster(item) {
        const poster = String(item?.vod_pic || '').trim();
        return /^https?:\/\//i.test(poster) || poster.startsWith('data:image/');
    }

    function scoreSearchResult(item, query, selectedAPIs = []) {
        const sourceCode = item?.source_code || '';
        const profile = getProviderProfile(sourceCode);
        const sourceOrder = selectedAPIs.includes(sourceCode) ? selectedAPIs.indexOf(sourceCode) : selectedAPIs.length + 50;
        const orderScore = Math.max(0, 18 - sourceOrder);
        const posterScore = hasUsablePoster(item) ? 8 : -10;
        const episodeHintScore = item?.vod_remarks ? 3 : 0;

        return getRelevanceScore(item, query)
            + profile.priority
            + getSignalScore(profile.playable)
            + getSignalScore(profile.stability)
            + getSignalScore(profile.poster)
            + orderScore
            + posterScore
            + episodeHintScore;
    }

    function compareProviderSearchResults(query, selectedAPIs = []) {
        return (a, b) => {
            const scoreA = scoreSearchResult(a, query, selectedAPIs);
            const scoreB = scoreSearchResult(b, query, selectedAPIs);
            if (scoreA !== scoreB) return scoreB - scoreA;

            const nameCompare = String(a?.vod_name || '').localeCompare(String(b?.vod_name || ''));
            if (nameCompare !== 0) return nameCompare;

            return String(a?.source_code || '').localeCompare(String(b?.source_code || ''));
        };
    }

    function getProviderBadge(sourceCode) {
        const profile = getProviderProfile(sourceCode);
        if (profile.playable === 'good' && profile.stability === 'good') {
            return { label: '优先源', className: 'bg-emerald-900/70 text-emerald-200' };
        }
        if (profile.playable === 'mixed' || profile.stability === 'mixed') {
            return { label: '补充源', className: 'bg-amber-900/70 text-amber-200' };
        }
        return { label: '未知质量', className: 'bg-gray-800 text-gray-300' };
    }

    window.PROVIDER_PROFILES = PROVIDER_PROFILES;
    window.getProviderProfile = getProviderProfile;
    window.scoreSearchResult = scoreSearchResult;
    window.compareProviderSearchResults = compareProviderSearchResults;
    window.getProviderBadge = getProviderBadge;
})();

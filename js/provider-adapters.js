// Lightweight provider adapter and health layer.
// Inspired by Stremio's separation of search/meta/stream, but kept local to LibreTV sources.
(function () {
    const HEALTH_CACHE_KEY = 'providerHealthCache';
    const HEALTH_CACHE_TTL = 30 * 60 * 1000;

    function readHealthCache() {
        try {
            return JSON.parse(sessionStorage.getItem(HEALTH_CACHE_KEY) || '{}');
        } catch (error) {
            return {};
        }
    }

    function writeHealthCache(cache) {
        try {
            sessionStorage.setItem(HEALTH_CACHE_KEY, JSON.stringify(cache));
        } catch (error) {
            // Ignore quota/private-mode failures; health checks are best-effort.
        }
    }

    function getCacheKey(sourceCode, vodId) {
        return `${sourceCode || ''}::${vodId || ''}`;
    }

    function getCachedHealth(sourceCode, vodId) {
        const cache = readHealthCache();
        const item = cache[getCacheKey(sourceCode, vodId)];
        if (!item || Date.now() - item.checkedAt > HEALTH_CACHE_TTL) {
            return null;
        }
        return item;
    }

    function setCachedHealth(sourceCode, vodId, health) {
        const cache = readHealthCache();
        cache[getCacheKey(sourceCode, vodId)] = {
            ...health,
            checkedAt: Date.now()
        };
        writeHealthCache(cache);
    }

    function getCustomApiBySource(sourceCode) {
        if (!String(sourceCode || '').startsWith('custom_')) return null;
        const index = String(sourceCode).replace('custom_', '');
        if (typeof window.getCustomApiInfo === 'function') {
            return window.getCustomApiInfo(index);
        }
        try {
            return JSON.parse(localStorage.getItem('customAPIs') || '[]')[Number(index)] || null;
        } catch (error) {
            return null;
        }
    }

    function buildDetailSearchParams(sourceCode, vodId) {
        const params = new URLSearchParams({
            id: String(vodId || ''),
            _t: String(Date.now())
        });

        if (String(sourceCode || '').startsWith('custom_')) {
            const customApi = getCustomApiBySource(sourceCode);
            if (!customApi?.url) {
                throw new Error('自定义源配置无效');
            }
            params.set('source', 'custom');
            params.set('customApi', customApi.url);
            if (customApi.detail) {
                params.set('customDetail', customApi.detail);
            }
        } else {
            params.set('source', sourceCode || '');
        }

        return params;
    }

    async function fetchProviderDetailHealth(sourceCode, vodId, options = {}) {
        if (!sourceCode || !vodId) {
            return {
                state: 'error',
                episodes: 0,
                latency: -1,
                message: '缺少源或视频 ID',
                checkedAt: Date.now()
            };
        }

        const cached = getCachedHealth(sourceCode, vodId);
        if (cached && !options.force) {
            return cached;
        }

        const startedAt = performance.now();
        const timeoutMs = options.timeoutMs || 6500;
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

        try {
            const params = buildDetailSearchParams(sourceCode, vodId);
            const response = await fetch(`/api/detail?${params.toString()}`, {
                cache: 'no-cache',
                signal: controller.signal
            });
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            const data = await response.json();
            const episodes = Array.isArray(data?.episodes) ? data.episodes.length : 0;
            const health = {
                state: episodes > 0 ? 'playable' : 'no_stream',
                episodes,
                latency: Math.round(performance.now() - startedAt),
                message: episodes > 0 ? '可播放' : (data?.msg || '无播放地址'),
                checkedAt: Date.now()
            };
            setCachedHealth(sourceCode, vodId, health);
            return health;
        } catch (error) {
            const health = {
                state: error.name === 'AbortError' ? 'timeout' : 'error',
                episodes: 0,
                latency: Math.round(performance.now() - startedAt),
                message: error.name === 'AbortError' ? '检测超时' : (error.message || '检测失败'),
                checkedAt: Date.now()
            };
            setCachedHealth(sourceCode, vodId, health);
            return health;
        } finally {
            clearTimeout(timeoutId);
        }
    }

    async function runWithConcurrency(items, worker, concurrency = 4) {
        const queue = [...items];
        const workers = Array.from({ length: Math.min(concurrency, queue.length) }, async () => {
            while (queue.length > 0) {
                const item = queue.shift();
                await worker(item);
            }
        });
        await Promise.all(workers);
    }

    async function precheckSearchResults(results, options = {}) {
        const limit = options.limit || 24;
        const concurrency = options.concurrency || 4;
        const candidates = results
            .filter(item => item?.source_code && item?.vod_id)
            .slice(0, limit);

        await runWithConcurrency(candidates, async (item) => {
            item.__health = await fetchProviderDetailHealth(item.source_code, item.vod_id, {
                timeoutMs: options.timeoutMs || 6500
            });
            if (typeof options.onUpdate === 'function') {
                options.onUpdate(item);
            }
        }, concurrency);

        return results;
    }

    function getHealthBadge(health) {
        if (!health) {
            return { label: '未检测', className: 'bg-gray-800 text-gray-300' };
        }
        if (health.state === 'playable') {
            return { label: `可播 ${health.episodes}集`, className: 'bg-green-900/70 text-green-200' };
        }
        if (health.state === 'timeout') {
            return { label: '检测超时', className: 'bg-orange-900/70 text-orange-200' };
        }
        if (health.state === 'no_stream') {
            return { label: '无播放地址', className: 'bg-red-900/70 text-red-200' };
        }
        return { label: '检测失败', className: 'bg-red-900/70 text-red-200' };
    }

    window.ProviderAdapters = {
        fetchProviderDetailHealth,
        precheckSearchResults,
        getHealthBadge,
        getCachedHealth
    };
})();

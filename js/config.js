// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png?v=20260423-free-srcs',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
    testSource: {
        api: 'https://www.example.com/api.php/provide/vod',
        name: '空内容测试源',
        adult: true
    },
    ia_pd: {
        name: '互联网档案馆·公版电影',
        adapter: 'internet_archive',
        archiveLicenseFilter: 'licenseurl:(*publicdomain*)'
    },
    ia_cc: {
        name: '互联网档案馆·CC电影',
        adapter: 'internet_archive',
        archiveLicenseFilter: 'licenseurl:(*creativecommons*)'
    },
    commons_video: {
        name: '维基共享资源·视频',
        adapter: 'wikimedia_commons_video'
    }
    //ARCHIVE https://telegra.ph/APIs-08-12
};

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

function normalizeMediaUrl(rawUrl, baseUrl = '') {
    if (!rawUrl || typeof rawUrl !== 'string') {
        return '';
    }

    const url = rawUrl.trim();
    if (!url) {
        return '';
    }

    if (url.startsWith('data:')) {
        return url;
    }

    if (url.startsWith('//')) {
        return `${window.location.protocol}${url}`;
    }

    try {
        const absoluteUrl = /^[a-z][a-z0-9+.-]*:/i.test(url)
            ? new URL(url)
            : new URL(url, baseUrl || window.location.origin);

        return absoluteUrl.toString();
    } catch (error) {
        return url;
    }
}

function getDefaultPosterDataUrl() {
    return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDMwMCA0NTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSI0NTAiIGZpbGw9IiMxMTEiLz48cmVjdCB4PSI0MCIgeT0iNjAiIHdpZHRoPSIyMjAiIGhlaWdodD0iMzMwIiByeD0iMjQiIGZpbGw9IiMxYjFiMWIiIHN0cm9rZT0iIzMzMyIvPjxwYXRoIGQ9Ik0xMDAgMTkwbDYwLTQwcDYwIDQwIiBzdHJva2U9IiM2NjYiIHN0cm9rZS13aWR0aD0iMTIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMDAgMjYwaDkwIiBzdHJva2U9IiM2NjYiIHN0cm9rZS13aWR0aD0iMTIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjE1MCIgeT0iMzQwIiBmaWxsPSIjOTk5IiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLC1hcHBsZS1zeXN0ZW0sU2Vnb2UgVUksUm9ib3RvLEFyaWFsIj7ov5HmiqXkvJrlkKc8L3RleHQ+PC9zdmc+';
}

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;

window.normalizeMediaUrl = normalizeMediaUrl;
window.getDefaultPosterDataUrl = getDefaultPosterDataUrl;

function escapeApiQueryTerm(value) {
    return String(value || '').replace(/[\\"]/g, ' ').trim();
}

function cleanHtmlText(value) {
    return String(value || '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function buildArchiveSearchQuery(query, licenseFilter) {
    const searchTerm = escapeApiQueryTerm(query);
    const parts = ['mediatype:(movies OR movie)', licenseFilter];
    if (searchTerm) {
        parts.push(`(${searchTerm})`);
    }
    return parts.join(' AND ');
}

function buildArchiveSearchUrl(query, page = 1, licenseFilter = 'licenseurl:(*publicdomain* OR *creativecommons*)') {
    const rows = 24;
    const archiveQuery = buildArchiveSearchQuery(query, licenseFilter);
    return `https://archive.org/advancedsearch.php?q=${encodeURIComponent(archiveQuery)}&fl[]=identifier&fl[]=title&fl[]=description&fl[]=year&fl[]=downloads&rows=${rows}&page=${page}&output=json&sort[]=downloads%20desc`;
}

function buildArchivePosterUrl(identifier) {
    return `https://archive.org/services/img/${encodeURIComponent(identifier)}`;
}

function buildArchiveDownloadUrl(identifier, fileName) {
    return `https://archive.org/download/${encodeURIComponent(identifier)}/${encodeURIComponent(fileName)}`;
}

function buildCommonsSearchUrl(query, page = 1) {
    const rows = 24;
    const offset = Math.max(page - 1, 0) * rows;
    const searchTerm = `${escapeApiQueryTerm(query)} filetype:video`.trim();
    const params = new URLSearchParams({
        action: 'query',
        generator: 'search',
        gsrsearch: searchTerm,
        gsrnamespace: '6',
        gsrlimit: String(rows),
        gsroffset: String(offset),
        prop: 'imageinfo',
        iiprop: 'url|extmetadata|mime|size|dimensions',
        iiurlwidth: '320',
        format: 'json'
    });
    return `https://commons.wikimedia.org/w/api.php?${params.toString()}`;
}

function getSpecialSourceConfig(sourceCode) {
    return API_SITES[sourceCode] && API_SITES[sourceCode].adapter ? API_SITES[sourceCode] : null;
}

async function fetchProxyJson(url) {
    const proxiedUrl = await window.ProxyAuth?.addAuthToProxyUrl
        ? await window.ProxyAuth.addAuthToProxyUrl(PROXY_URL + encodeURIComponent(url))
        : PROXY_URL + encodeURIComponent(url);
    const response = await fetch(proxiedUrl, {
        headers: API_CONFIG.search.headers
    });
    if (!response.ok) {
        throw new Error(`代理请求失败: ${response.status}`);
    }
    return response.json();
}

function mapArchiveSearchResults(docs, sourceCode) {
    const sourceName = API_SITES[sourceCode].name;
    return (docs || []).map(doc => {
        const identifier = doc.identifier || '';
        return {
            vod_id: identifier,
            vod_name: doc.title || identifier,
            vod_pic: buildArchivePosterUrl(identifier),
            vod_remarks: doc.year ? String(doc.year) : '',
            vod_content: doc.description || '',
            type_name: 'Internet Archive',
            source_name: sourceName,
            source_code: sourceCode,
            api_url: identifier ? `https://archive.org/details/${encodeURIComponent(identifier)}` : ''
        };
    });
}

function mapCommonsSearchResults(pages, sourceCode) {
    const sourceName = API_SITES[sourceCode].name;
    const sortedPages = Object.values(pages || {}).sort((a, b) => (a.index || 0) - (b.index || 0));
    return sortedPages.map(page => {
        const info = Array.isArray(page.imageinfo) ? page.imageinfo[0] || {} : {};
        const meta = info.extmetadata || {};
        const title = meta.ObjectName?.value || page.title || '';
        return {
            vod_id: page.title || title,
            vod_name: title.replace(/^File:/, ''),
            vod_pic: info.thumburl || info.url || '',
            vod_remarks: info.duration ? `${Math.round(info.duration)}秒` : '',
            vod_content: cleanHtmlText(meta.ImageDescription?.value || meta.Credit?.value || meta.Artist?.value || ''),
            type_name: 'Wikimedia Commons',
            source_name: sourceName,
            source_code: sourceCode,
            api_url: page.title || ''
        };
    });
}

function isPlayableArchiveFile(file) {
    const name = String(file?.name || '').toLowerCase();
    const format = String(file?.format || '').toLowerCase();
    return (
        /\.(mp4|m4v|mkv|webm|ogv|mov|avi|mpg|mpeg|flv|ts)$/.test(name) ||
        ['h.264', 'h.265', 'mpeg4', 'matroska', 'webm', 'mpeg', 'quicktime', 'ogg video', 'avi'].includes(format)
    );
}

async function searchSpecialSource(sourceCode, query, page = 1) {
    const sourceConfig = getSpecialSourceConfig(sourceCode);
    if (!sourceConfig) {
        throw new Error('无效的特殊源');
    }

    if (sourceConfig.adapter === 'internet_archive') {
        const apiUrl = buildArchiveSearchUrl(query, page, sourceConfig.archiveLicenseFilter);
        const data = await fetchProxyJson(apiUrl);
        const docs = data?.response?.docs || [];
        return {
            code: 200,
            list: mapArchiveSearchResults(docs, sourceCode),
            pagecount: 1
        };
    }

    if (sourceConfig.adapter === 'wikimedia_commons_video') {
        const apiUrl = buildCommonsSearchUrl(query, page);
        const data = await fetchProxyJson(apiUrl);
        return {
            code: 200,
            list: mapCommonsSearchResults(data?.query?.pages || {}, sourceCode),
            pagecount: 1
        };
    }

    throw new Error('未支持的特殊源类型');
}

async function fetchSpecialSourceDetail(sourceCode, id) {
    const sourceConfig = getSpecialSourceConfig(sourceCode);
    if (!sourceConfig) {
        throw new Error('无效的特殊源');
    }

    if (sourceConfig.adapter === 'internet_archive') {
        const detailUrl = `https://archive.org/metadata/${encodeURIComponent(id)}`;
        const data = await fetchProxyJson(detailUrl);
        const files = Array.isArray(data?.files) ? data.files : [];
        const episodes = [...new Set(files.filter(isPlayableArchiveFile).map(file => buildArchiveDownloadUrl(id, file.name)).filter(Boolean))];
        return {
            code: 200,
            episodes,
            detailUrl,
            videoInfo: {
                title: data?.metadata?.title || id,
                cover: buildArchivePosterUrl(id),
                desc: cleanHtmlText(data?.metadata?.description || data?.metadata?.subject || ''),
                year: data?.metadata?.year || '',
                source_name: sourceConfig.name,
                source_code: sourceCode
            }
        };
    }

    if (sourceConfig.adapter === 'wikimedia_commons_video') {
        const detailUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(id)}&prop=imageinfo&iiprop=url|extmetadata|mime|size|dimensions&iiurlwidth=320&format=json`;
        const data = await fetchProxyJson(detailUrl);
        const pages = data?.query?.pages || {};
        const page = pages[Object.keys(pages)[0]];
        const info = Array.isArray(page?.imageinfo) ? page.imageinfo[0] || {} : {};
        const meta = info.extmetadata || {};
        return {
            code: 200,
            episodes: info.url ? [info.url] : [],
            detailUrl,
            videoInfo: {
                title: meta.ObjectName?.value || page?.title?.replace(/^File:/, '') || id,
                cover: info.thumburl || info.url || '',
                desc: cleanHtmlText(meta.ImageDescription?.value || meta.Credit?.value || meta.Artist?.value || ''),
                source_name: sourceConfig.name,
                source_code: sourceCode
            }
        };
    }

    throw new Error('未支持的特殊源详情');
}

window.getSpecialSourceConfig = getSpecialSourceConfig;
window.searchSpecialSource = searchSpecialSource;
window.fetchSpecialSourceDetail = fetchSpecialSourceDetail;

#!/usr/bin/env node

const ENDPOINTS = [
    {
        name: 'Cinemeta manifest',
        url: 'https://v3-cinemeta.strem.io/manifest.json',
        validate: data => data?.id === 'com.linvo.cinemeta' && data.resources?.includes('meta')
    },
    {
        name: 'Cinemeta search',
        url: 'https://v3-cinemeta.strem.io/catalog/movie/top/search=Matrix.json',
        validate: data => Array.isArray(data?.metas) && data.metas.some(item => item.id === 'tt0133093')
    },
    {
        name: 'OpenSubtitles v3 manifest',
        url: 'https://opensubtitles-v3.strem.io/manifest.json',
        validate: data => data?.id === 'org.stremio.opensubtitlesv3' && data.resources?.includes('subtitles')
    }
];

async function fetchJson(endpoint) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    try {
        const response = await fetch(endpoint.url, {
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

let failures = 0;
for (const endpoint of ENDPOINTS) {
    try {
        const data = await fetchJson(endpoint);
        if (!endpoint.validate(data)) {
            throw new Error('unexpected response shape');
        }
        console.log(`ok ${endpoint.name}`);
    } catch (error) {
        failures += 1;
        console.error(`failed ${endpoint.name}: ${error.name === 'AbortError' ? 'timeout' : error.message}`);
    }
}

process.exit(failures === 0 ? 0 : 1);

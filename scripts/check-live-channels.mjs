import fs from 'node:fs';
import vm from 'node:vm';

const CHANNEL_FILE = new URL('../js/live-channels.js', import.meta.url);
const TIMEOUT_MS = Number(process.env.LIVE_CHECK_TIMEOUT_MS || 9000);
const CONCURRENCY = Number(process.env.LIVE_CHECK_CONCURRENCY || 12);

function loadChannels() {
    const code = fs.readFileSync(CHANNEL_FILE, 'utf8');
    const context = {
        window: {},
        document: { addEventListener() {}, getElementById() { return null; } },
        localStorage: { getItem() { return null; }, setItem() {} },
        URLSearchParams,
        escapeHtml: value => String(value ?? ''),
        showPasswordModal() {},
        showToast() {}
    };
    vm.createContext(context);
    vm.runInContext(code, context);
    return context.window.LIVE_CHANNELS || [];
}

async function checkChannel(channel) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

    try {
        const response = await fetch(channel.url, {
            signal: controller.signal,
            redirect: 'follow',
            headers: {
                Accept: 'application/vnd.apple.mpegurl,application/x-mpegURL,text/plain,*/*',
                'User-Agent': 'Mozilla/5.0 LibreTV live-channel-health'
            }
        });
        const body = await response.text();
        const ok = response.ok && body.includes('#EXTM3U');
        return {
            id: channel.id,
            name: channel.name,
            category: channel.category,
            lang: channel.lang,
            ok,
            status: response.status,
            reason: ok ? 'ok' : 'not_m3u8_or_http_error'
        };
    } catch (error) {
        return {
            id: channel.id,
            name: channel.name,
            category: channel.category,
            lang: channel.lang,
            ok: false,
            status: error.name || 'ERR',
            reason: error.message
        };
    } finally {
        clearTimeout(timer);
    }
}

async function main() {
    const channels = loadChannels();
    const results = [];
    let nextIndex = 0;

    await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
        while (nextIndex < channels.length) {
            const channel = channels[nextIndex++];
            const result = await checkChannel(channel);
            results.push(result);
            process.stdout.write(result.ok ? '.' : 'F');
        }
    }));

    const failures = results.filter(result => !result.ok);
    const summary = {
        total: results.length,
        ok: results.length - failures.length,
        fail: failures.length,
        zh: results.filter(result => result.lang === 'zh').length,
        en: results.filter(result => result.lang === 'en').length,
        checkedAt: new Date().toISOString()
    };

    console.log('\n' + JSON.stringify(summary, null, 2));
    if (failures.length > 0) {
        console.log('\nFailures:');
        failures
            .sort((a, b) => String(a.lang).localeCompare(String(b.lang)) || String(a.category).localeCompare(String(b.category)))
            .forEach(result => {
                console.log(`${result.id}\t${result.name}\t${result.status}\t${result.reason}`);
            });
        process.exitCode = 1;
    }
}

main().catch(error => {
    console.error(error);
    process.exitCode = 1;
});

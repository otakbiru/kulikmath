/**
 * KulikMath - Lightweight Zero-Dependency Live Server with Auto-Reload
 * Built-in HTTP server + SSE (Server-Sent Events) file watcher
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const ROOT_DIR = __dirname;
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 5500;

// Parse CLI flags (e.g. node live-server.js --port=3000 --open)
const args = process.argv.slice(2);
let port = DEFAULT_PORT;
let shouldOpen = false;

for (const arg of args) {
    if (arg.startsWith('--port=')) {
        port = parseInt(arg.split('=')[1], 10) || DEFAULT_PORT;
    } else if (arg === '--open' || arg === '-o') {
        shouldOpen = true;
    }
}

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.htm': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.mjs': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.otf': 'font/otf',
    '.pdf': 'application/pdf',
    '.txt': 'text/plain; charset=utf-8'
};

const LIVE_RELOAD_SCRIPT = `
<!-- Injected by KulikMath Live Server -->
<script>
(() => {
    let source;
    function initLiveReload() {
        source = new EventSource('/__live_reload__');
        source.onmessage = (event) => {
            if (event.data === 'reload') {
                console.log('[live-server] Perubahan berkas terdeteksi. Memuat ulang...');
                location.reload();
            }
        };
        source.onerror = () => {
            source.close();
            setTimeout(initLiveReload, 1500);
        };
    }
    if (window.EventSource) {
        initLiveReload();
    }
})();
</script>
`;

// Set of active SSE client connections
const sseClients = new Set();

function broadcastReload(changedFile) {
    if (sseClients.size === 0) return;
    const msg = 'data: reload\n\n';
    for (const res of sseClients) {
        try {
            res.write(msg);
        } catch (_) {
            sseClients.delete(res);
        }
    }
    console.log(`[live-server] \x1b[36m${changedFile}\x1b[0m diubah -> memuat ulang ${sseClients.size} peramban.`);
}

// Debounce file changes
let reloadTimeout = null;
const IGNORED_DIRS = new Set(['.git', '.gemini', 'node_modules', '.vscode']);
const WATCH_EXTS = new Set(['.html', '.htm', '.css', '.js', '.json', '.svg', '.png', '.jpg', '.jpeg', '.webp']);

try {
    fs.watch(ROOT_DIR, { recursive: true }, (eventType, filename) => {
        if (!filename) return;

        // Normalize path separators
        const norm = filename.replace(/\\/g, '/');
        const firstSegment = norm.split('/')[0];
        if (IGNORED_DIRS.has(firstSegment)) return;

        const ext = path.extname(filename).toLowerCase();
        if (WATCH_EXTS.has(ext)) {
            clearTimeout(reloadTimeout);
            reloadTimeout = setTimeout(() => {
                broadcastReload(filename);
            }, 80);
        }
    });
} catch (err) {
    console.warn('[live-server] fs.watch recursive warning:', err.message);
}

const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    let pathname = decodeURIComponent(parsedUrl.pathname);

    // SSE Endpoint for Live Reload
    if (pathname === '/__live_reload__') {
        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache, no-transform',
            'Connection': 'keep-alive',
            'Access-Control-Allow-Origin': '*'
        });
        res.write(': terhubung\n\n');
        sseClients.add(res);

        req.on('close', () => {
            sseClients.delete(res);
        });
        return;
    }

    // Resolve file path
    let filePath = path.join(ROOT_DIR, pathname);

    // Prevent directory traversal
    if (!filePath.startsWith(ROOT_DIR)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('Akses Ditolak');
        return;
    }

    fs.stat(filePath, (err, stats) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(`<h1>404 Tidak Ditemukan</h1><p>Berkas <code>${pathname}</code> tidak ditemukan di KulikMath.</p>`);
            return;
        }

        if (stats.isDirectory()) {
            const indexHtml = path.join(filePath, 'index.html');
            if (fs.existsSync(indexHtml)) {
                filePath = indexHtml;
            } else {
                // List directory entries
                fs.readdir(filePath, (err, files) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        res.end('Gagal membaca direktori');
                        return;
                    }
                    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                    const listItems = files.map(f => {
                        const rel = path.join(pathname, f).replace(/\\/g, '/');
                        return `<li><a href="${rel}">${f}</a></li>`;
                    }).join('');
                    res.end(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>Indeks ${pathname}</title></head><body><h2>Daftar Berkas: ${pathname}</h2><ul><li><a href="..">.. (kembali)</a></li>${listItems}</ul></body></html>`);
                });
                return;
            }
        }

        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        if (ext === '.html' || ext === '.htm') {
            fs.readFile(filePath, 'utf8', (readErr, content) => {
                if (readErr) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Gagal membaca berkas HTML');
                    return;
                }

                // Inject live reload script before </body>, or append at the end
                let finalHtml = content;
                if (finalHtml.includes('</body>')) {
                    finalHtml = finalHtml.replace('</body>', `${LIVE_RELOAD_SCRIPT}\n</body>`);
                } else {
                    finalHtml += LIVE_RELOAD_SCRIPT;
                }

                const buffer = Buffer.from(finalHtml, 'utf8');
                res.writeHead(200, {
                    'Content-Type': contentType,
                    'Content-Length': buffer.length,
                    'Cache-Control': 'no-cache'
                });
                res.end(buffer);
            });
        } else {
            // Stream static assets
            res.writeHead(200, {
                'Content-Type': contentType,
                'Content-Length': stats.size,
                'Cache-Control': 'no-cache'
            });
            const stream = fs.createReadStream(filePath);
            stream.pipe(res);
        }
    });
});

function startServer(targetPort) {
    server.listen(targetPort, () => {
        const localUrl = `http://localhost:${targetPort}`;
        console.log('\n\x1b[32m=======================================================');
        console.log(`   KulikMath Live Server Aktif`);
        console.log(`   Lokal:    \x1b[1m\x1b[36m${localUrl}\x1b[0m`);
        console.log(`   Direktori:\x1b[33m ${ROOT_DIR}\x1b[0m`);
        console.log('   Fitur:    Auto-Reload (SSE) aktif pada setiap perubahan');
        console.log('\x1b[32m=======================================================\x1b[0m\n');

        if (shouldOpen) {
            exec(`start ${localUrl}`);
        }
    });

    server.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.warn(`[live-server] Port ${targetPort} sedang digunakan, mencoba port ${targetPort + 1}...`);
            startServer(targetPort + 1);
        } else {
            console.error('[live-server] Kesalahan server:', err);
        }
    });
}

startServer(port);

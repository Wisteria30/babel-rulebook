import { serve } from 'bun'
import { join } from 'path'
import { readFileSync, existsSync, statSync } from 'fs'

const DIST_DIR = join(import.meta.dirname, 'dist')
const PORT = 8000

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
}

serve({
  port: PORT,
  fetch(req) {
    const url = new URL(req.url)
    let pathname = url.pathname

    // Default to index.html for root
    if (pathname === '/') {
      pathname = '/index.html'
    }

    const filePath = join(DIST_DIR, pathname)

    // Security: prevent directory traversal
    if (!filePath.startsWith(DIST_DIR)) {
      return new Response('Forbidden', { status: 403 })
    }

    // Try to serve the file
    if (existsSync(filePath) && statSync(filePath).isFile()) {
      const ext = pathname.substring(pathname.lastIndexOf('.'))
      const contentType = MIME_TYPES[ext] || 'application/octet-stream'
      const content = readFileSync(filePath)
      return new Response(content, {
        headers: { 'Content-Type': contentType }
      })
    }

    // SPA fallback: serve index.html for non-file routes
    const indexPath = join(DIST_DIR, 'index.html')
    if (existsSync(indexPath)) {
      const content = readFileSync(indexPath)
      return new Response(content, {
        headers: { 'Content-Type': 'text/html' }
      })
    }

    return new Response('Not Found', { status: 404 })
  }
})

console.log(`Server running at http://localhost:${PORT}`)

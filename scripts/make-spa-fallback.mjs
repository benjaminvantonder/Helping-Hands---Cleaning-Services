import { copyFile } from 'node:fs/promises'

// GitHub Pages serves 404.html for unknown paths. Serving a copy of the SPA
// shell lets React Router resolve deep links such as /services or /contact#quote.
await copyFile('dist/index.html', 'dist/404.html')
console.log('Created dist/404.html (SPA fallback)')

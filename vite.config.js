import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { copyFileSync, readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const appVersionFile = resolve(__dirname, 'app-version.json')

function appVersionJson() {
  return {
    name: 'app-version-json',
    configureServer(server) {
      server.middlewares.use('/app-version.json', (_, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.end(readFileSync(appVersionFile))
      })
    },
    writeBundle(options) {
      copyFileSync(appVersionFile, resolve(options.dir, 'app-version.json'))
    },
  }
}

export default defineConfig({
  plugins: [
    appVersionJson(),
    react(),
    tailwindcss(),
  ],
})

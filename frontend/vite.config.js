import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

const backendDirectory = resolve(
  dirname(fileURLToPath(import.meta.url)),
  '../backend',
)

export default defineConfig(({ mode }) => {
  const backendEnv = loadEnv(mode, backendDirectory, '')
  const backendPort = backendEnv.PORT || '5000'

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: `http://localhost:${backendPort}`,
          changeOrigin: true,
        },
      },
    },
  }
})

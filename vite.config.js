import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const plugins = [vue()]

// Ajout des devtools uniquement en développement
if (process.env.NODE_ENV === 'development') {
  const vueDevTools = await import('vite-plugin-vue-devtools')
  plugins.push(vueDevTools.default())
}

export default defineConfig({
  plugins,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
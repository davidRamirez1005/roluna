import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { visualizer } from 'rollup-plugin-visualizer'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    visualizer({ open: true }), // Visualiza el tamaño del bundle
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@shared': resolve(__dirname, 'src/shared'),
      '@modules': resolve(__dirname, 'src/modules'),
      '@core': resolve(__dirname, 'src/modules/core'),
      '@catalog': resolve(__dirname, 'src/modules/catalog'),
      '@men': resolve(__dirname, 'src/modules/men'),
      '@women': resolve(__dirname, 'src/modules/women'),
      '@auth': resolve(__dirname, 'src/modules/auth'),
      '@assets': resolve(__dirname, 'src/assets'),
    }
  }
})
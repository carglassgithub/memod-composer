import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import { createVuePlugin as vue2 } from 'vite-plugin-vue2'
// @ts-ignore
import vueTemplateBabelCompiler from 'vue-template-babel-compiler'
import scriptSetup from 'unplugin-vue2-script-setup/vite'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2({
      jsx: true,
      vueTemplateOptions: {
        compiler: vueTemplateBabelCompiler
      }
    }),
    scriptSetup(),
    eslintPlugin()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: fileURLToPath(
        new URL('./src/components/composer/index.js', import.meta.url)
      ),
      name: 'memod-composer'
    },
    rollupOptions: {
      external: ['@vue/composition-api', 'vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  test: {
    setupFiles: ['./src/components/__tests__/setup/index.js'],
    globals: true,
    environment: 'jsdom'
  }
})

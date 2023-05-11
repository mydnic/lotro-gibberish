import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
    plugins: [
        laravel([
            'resources/js/app.js',
            'resources/css/app.css'
        ]),
        vue(),
        Components({
            dirs: ['resources/js/Components'],
        }),
    ],
})

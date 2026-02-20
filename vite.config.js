import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import ui from '@nuxt/ui/vite'

export default defineConfig({
    resolve: {
        alias: {
            'ziggy-js': path.resolve('vendor/tightenco/ziggy')
        }
    },

    plugins: [
        tailwindcss(),

        ui({
            router: 'inertia',
            ui: {
                colors: {
                    primary: 'yellow',
                    neutral: 'gray'
                }
            }
        }),

        laravel({
            input: [
                'resources/js/app.js',
                'resources/css/app.css'
            ]
            // ssr: 'resources/js/ssr.js',
        }),
        vue()
    ]
})

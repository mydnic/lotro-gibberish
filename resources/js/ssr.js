import { createSSRApp, h } from 'vue'
import createServer from '@inertiajs/vue3/server'
import { renderToString } from '@vue/server-renderer'
import { createInertiaApp, Link, Head } from '@inertiajs/vue3'
import { ZiggyVue } from 'ziggy-js'
import ui from '@nuxt/ui/vue-plugin'

import { Ziggy } from './ziggy'
import AppLayout from './Layouts/AppLayout.vue'

createServer(page =>
    createInertiaApp({
        page,
        render: renderToString,
        title: title => `${title} - Lotro Gibberish Config`,
        resolve: name => {
            const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
            return pages[`./Pages/${name}.vue`]
        },
        // ponytail: no .mount() on the server — return the app instance instead
        setup ({ App, props, plugin }) {
            return createSSRApp({ render: () => h(App, props) })
                .use(plugin)
                .use(ZiggyVue, Ziggy)
                .use(ui)
                .component('AppLayout', AppLayout)
                .component('Link', Link)
                .component('Head', Head)
        },
    })
)

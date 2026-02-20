import { createApp, h } from 'vue'
import { createInertiaApp, Head, Link } from '@inertiajs/vue3'
import { ZiggyVue } from 'ziggy-js'
import ui from '@nuxt/ui/vue-plugin'

import AppLayout from './Layouts/AppLayout.vue'

createInertiaApp({
    title: title => `${title} - Lotro Gibberish Config`,
    resolve: (name) => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        return pages[`./Pages/${name}.vue`]
    },
    setup ({ el, App, props, plugin }) {
        const vueApp = createApp({ render: () => h(App, props) })

        vueApp.use(plugin)
            .use(ZiggyVue)
            .use(ui)
            .component('AppLayout', AppLayout)
            .component('Link', Link)
            .component('Head', Head)
            .mount(el)
    }
})

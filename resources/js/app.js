import { createApp, h } from 'vue'
import { createInertiaApp, Link } from '@inertiajs/vue3'

import AppLayout from './Layouts/AppLayout.vue'

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        let page = pages[`./Pages/${name}.vue`]
        page.default.layout = page.default.layout || AppLayout
        return page
    },
    setup({ el, App, props, plugin }) {
        const vueApp = createApp({ render: () => h(App, props) })


        vueApp.use(plugin)
            .component('Link', Link)
            .mount(el)
    },
})

import { createApp, h } from 'vue'
import { createInertiaApp, Link, Head } from '@inertiajs/vue3'

// import AppLayout from './Layouts/AppLayout.vue'

createInertiaApp({
    title: title => `${title} - Lotro Gibberish Config`,
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        let page = pages[`./Pages/${name}.vue`]
        // page.default.layout = page.default.layout || AppLayout
        return page
    },
    setup({ el, App, props, plugin }) {
        const vueApp = createApp({ render: () => h(App, props) })

        vueApp.use(plugin)
            .mixin({ methods: { route } })
            .component('Link', Link)
            .component('Head', Head)
            .mount(el)
    },
})

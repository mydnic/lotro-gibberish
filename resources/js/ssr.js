import { createSSRApp, h } from 'vue'
import createServer from '@inertiajs/vue3/server'
import { renderToString } from '@vue/server-renderer'
import { createInertiaApp, Link, Head } from '@inertiajs/vue3'

// import AppLayout from './Layouts/AppLayout.vue'
createServer(page =>
    createInertiaApp({
        page,
        render: renderToString,
        title: title => `${title} - Lotro Gibberish Config`,
        resolve: name => {
            const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
            let page = pages[`./Pages/${name}.vue`]
            // page.default.layout = page.default.layout || AppLayout
            return page
        },
        setup({ App, props, plugin }) {

            const vueApp = createSSRApp({ render: () => h(App, props) })
            vueApp.use(plugin)
                .mixin({ methods: { route } })
                .component('Link', Link)
                .component('Head', Head)
                .mount(el)
        },
    })
)

<template>
    <Link :href="'/'">
        <application-logo class="h-32" />
    </Link>
</template>

<script>
    import { defineComponent } from 'vue'
    import { Link } from '@inertiajs/vue3';
    import ApplicationLogo from '@/Jetstream/ApplicationLogo.vue'

    export default defineComponent({
        components: {
            Link,
            ApplicationLogo
        },
    })
</script>

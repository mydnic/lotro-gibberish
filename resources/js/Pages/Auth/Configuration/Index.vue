<template>
    <AppLayout title="My Configs">
        <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold leading-tight text-gray-800 dark:text-white">
                My Configs
            </h2>
            <UButton
                :href="route('user.configuration.create')"
                color="primary"
            >
                Publish New Config
            </UButton>
        </div>

        <div class="grid grid-cols-1 gap-3 mt-8">
            <Link
                v-for="config in configurations"
                :key="config.id"
                :href="route('user.configuration.edit', config)"
            >
                <UCard
                    variant="soft"
                    class="hover:ring-2 hover:ring-primary transition-shadow cursor-pointer"
                >
                    <div class="flex items-start gap-4">
                        <img
                            v-if="config.image_url"
                            :src="config.image_url"
                            :alt="config.title"
                            class="size-16 object-cover rounded-lg shrink-0"
                        >

                        <div class="flex-1 min-w-0">
                            <div class="flex items-start justify-between gap-3">
                                <h3 class="font-semibold text-gray-900 dark:text-white truncate">
                                    {{ config.title }}
                                </h3>
                                <div class="flex items-center gap-2 shrink-0">
                                    <UBadge
                                        :color="config.version === 'v3' ? 'success' : 'warning'"
                                        variant="subtle"
                                        size="sm"
                                    >
                                        Gibberish {{ config.version }}
                                    </UBadge>
                                    <UBadge
                                        color="neutral"
                                        variant="outline"
                                        size="sm"
                                        class="uppercase"
                                    >
                                        {{ config.language }}
                                    </UBadge>
                                </div>
                            </div>

                            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                                {{ stripUrls(config.description) }}
                            </p>

                            <div class="flex items-center gap-4 mt-3 text-xs text-gray-500 dark:text-gray-400">
                                <span class="flex items-center gap-1.5">
                                    <UIcon
                                        name="lucide:user"
                                        class="size-3.5"
                                    />
                                    {{ config.user.username }}
                                </span>
                                <span
                                    v-if="config.category"
                                    class="flex items-center gap-1.5"
                                >
                                    <img
                                        v-if="config.category.icon_path"
                                        :src="'/icons/' + config.category.icon_path"
                                        :alt="config.category.title"
                                        class="size-3.5"
                                    >
                                    <UIcon
                                        v-else
                                        name="lucide:tag"
                                        class="size-3.5"
                                    />
                                    {{ config.category.title }}
                                </span>
                                <span class="flex items-center gap-1.5">
                                    <UIcon
                                        name="lucide:star"
                                        class="size-3.5"
                                    />
                                    {{ config.likes_count }}
                                </span>
                            </div>
                        </div>
                    </div>
                </UCard>
            </Link>
        </div>
    </AppLayout>
</template>

<script>
import { defineComponent } from 'vue'
import AppLayout from '@/Layouts/AppLayout.vue'
import dayjs from 'dayjs'

export default defineComponent({

    components: {
        AppLayout
    },
    props: ['configurations'],

    methods: {
        formatDate (dateString) {
            return dayjs(dateString).format('DD/MM/YYYY')
        },

        stripUrls (text) {
            return (text || '').replace(/https?:\/\/\S+/g, '').replace(/\s+/g, ' ').trim()
        }
    }
})
</script>

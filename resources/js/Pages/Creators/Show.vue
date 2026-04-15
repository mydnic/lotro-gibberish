<template>
    <AppLayout
        :title="`${creator.username} - Public Configs`"
        :description="`Browse public LOTRO Gibberish configurations shared by ${creator.username}.`"
        :canonical="route('creators.show', creator.username)"
    >
        <div class="mb-8">
            <div class="flex items-start justify-between gap-4">
                <div>
                    <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {{ creator.username }}
                    </h1>
                    <p class="text-gray-600 dark:text-gray-400">
                        Public configurations shared by this creator.
                    </p>
                </div>

                <UButton
                    v-if="creator.support_link"
                    :href="creator.support_link"
                    target="_blank"
                    variant="outline"
                    color="neutral"
                    rel="noopener noreferrer"
                    icon="lucide:heart"
                >
                    Support
                </UButton>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div class="text-center p-3 bg-white dark:bg-zinc-800 rounded-lg">
                    <div class="text-2xl font-bold text-gray-900 dark:text-white">
                        {{ creator.configurations_count }}
                    </div>
                    <div class="text-xs text-gray-500 dark:text-gray-400">
                        Public Configs
                    </div>
                </div>
                <div class="text-center p-3 bg-white dark:bg-zinc-800 rounded-lg">
                    <div class="text-2xl font-bold text-yellow-600 dark:text-yellow-500 flex items-center justify-center gap-1">
                        <UIcon
                            name="lucide:star"
                            class="size-5"
                        />
                        {{ creator.total_stars }}
                    </div>
                    <div class="text-xs text-gray-500 dark:text-gray-400">
                        Total Stars
                    </div>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 gap-3">
            <Link
                v-for="config in configurations.data"
                :key="config.id"
                :href="route('configuration.show', config)"
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
                            class="size-16 object-cover rounded-lg flex-shrink-0"
                        >

                        <div class="flex-1 min-w-0">
                            <div class="flex items-start justify-between gap-3">
                                <h3 class="font-semibold text-gray-900 dark:text-white truncate">
                                    {{ config.title }}
                                </h3>
                                <div class="flex items-center gap-2 flex-shrink-0">
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
                                <span
                                    class="flex items-center gap-1.5"
                                >
                                    <UIcon
                                        name="lucide:star"
                                        class="size-3.5"
                                    />
                                    {{ config.like_counter?.count || 0 }}
                                </span>
                            </div>
                        </div>
                    </div>
                </UCard>
            </Link>
        </div>

        <div
            v-if="configurations.last_page > 1"
            class="mt-8 flex justify-center"
        >
            <UPagination
                :total="configurations.total"
                :page="configurations.current_page"
                :items-per-page="configurations.per_page"
                @update:page="onPageChange"
            />
        </div>

        <UCard
            v-if="!configurations.data || configurations.data.length === 0"
            variant="soft"
            class="text-center py-12 mt-8"
        >
            <UIcon
                name="lucide:search-x"
                class="size-12 text-gray-400 mx-auto mb-4"
            />
            <p class="text-gray-600 dark:text-gray-400">
                No public configs found for this creator.
            </p>
        </UCard>
    </AppLayout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: ['creator', 'configurations'],

    methods: {
        stripUrls (text) {
            return (text || '').replace(/https?:\/\/\S+/g, '').replace(/\s+/g, ' ').trim()
        },

        onPageChange (page) {
            this.$inertia.get(route('creators.show', this.creator.username), { page }, { preserveState: true })
        }
    }
})
</script>

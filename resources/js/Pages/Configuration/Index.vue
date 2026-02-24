<template>
    <AppLayout title="All Configs">
        <div class="flex items-center gap-4">
            <div class="relative grow max-w-md">
                <UInput
                    v-model="form.search"
                    placeholder="Search..."
                    type="search"
                    icon="lucide:search"
                    class="w-full"
                    autofocus
                />
            </div>

            <USelect
                v-model="form.version"
                :items="versionOptions"
                placeholder="Plugin Version"
                class="w-40"
            />

            <USelect
                v-model="form.language"
                :items="languageOptions"
                placeholder="All Languages"
                class="w-32"
            />

            <UPopover>
                <UButton
                    variant="outline"
                    color="neutral"
                >
                    Categories
                    <span v-if="form.categories.length">
                        ({{ form.categories.length }})
                    </span>
                    <UIcon
                        name="lucide:chevron-down"
                        class="ml-2"
                    />
                </UButton>

                <template #content>
                    <div class="p-4 w-56 max-h-96 overflow-auto">
                        <UCheckboxGroup
                            v-model="form.categories"
                            :items="categories"
                            value-key="id"
                            label-key="title"
                        />
                    </div>
                </template>
            </UPopover>

            <UButton
                variant="ghost"
                color="neutral"
                icon="lucide:refresh-cw"
                @click="resetFilters"
            />
        </div>
        <div class="grid grid-cols-1 gap-3 mt-8">
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

        <div
            v-if="!configurations.data || configurations.data.length === 0"
            class="text-center mt-8"
        >
            <UIcon
                name="lucide:search-x"
                class="w-12 h-12 mx-auto text-gray-400"
            />
            <h3 class="mt-2 text-sm font-medium text-gray-900 dark:text-white">
                Nothing found.
            </h3>
            <p class="mt-1 text-sm text-gray-500">
                No configs match your search criteria.
            </p>
        </div>
    </AppLayout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: ['configurations', 'categories'],

    data () {
        return {
            form: {
                search: new URLSearchParams(window.location.search).get('search') || '',
                version: new URLSearchParams(window.location.search).get('version') || null,
                language: new URLSearchParams(window.location.search).get('language') || null,
                categories: this.getCategoriesFromQuery()
            },
            debounceTimer: null,
            versionOptions: [
                { label: 'Plugin Version', value: null },
                { label: 'Gibberish v2', value: 'v2' },
                { label: 'Gibberish v3', value: 'v3' }
            ],
            languageOptions: [
                { label: 'All Languages', value: null },
                { label: 'FR', value: 'fr' },
                { label: 'DE', value: 'de' },
                { label: 'EN', value: 'en' }
            ]
        }
    },

    watch: {
        'form.search' () { this.debouncedSubmit() },
        'form.version' () { this.debouncedSubmit() },
        'form.language' () { this.debouncedSubmit() },
        'form.categories' () { this.debouncedSubmit() }
    },

    methods: {
        stripUrls (text) {
            return (text || '').replace(/https?:\/\/\S+/g, '').replace(/\s+/g, ' ').trim()
        },

        getCategoriesFromQuery () {
            const cats = new URLSearchParams(window.location.search).get('categories')
            return cats ? cats.split(',').map(Number).filter(Boolean) : []
        },

        buildParams (extra = {}) {
            const params = {}
            if (this.form.search) params.search = this.form.search
            if (this.form.version) params.version = this.form.version
            if (this.form.language) params.language = this.form.language
            if (this.form.categories.length) params.categories = this.form.categories.join(',')
            return { ...params, ...extra }
        },

        debouncedSubmit () {
            clearTimeout(this.debounceTimer)
            this.debounceTimer = setTimeout(() => {
                this.$inertia.get(route('home'), this.buildParams(), { preserveState: true })
            }, 500)
        },

        resetFilters () {
            this.form.search = ''
            this.form.version = null
            this.form.language = null
            this.form.categories = []
            this.$inertia.get(route('home'), {}, { preserveState: false })
        },

        onPageChange (page) {
            this.$inertia.get(route('home'), this.buildParams({ page }), { preserveState: true })
        }
    }
})
</script>

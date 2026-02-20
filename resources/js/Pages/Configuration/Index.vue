<template>
    <AppLayout title="All Configs">
        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <UPageHeader title="Latest Configs" class="mb-8" />

                <UForm
                    class="space-y-4"
                    @submit.prevent="submitFilters"
                >
                    <div class="flex flex-wrap items-center gap-4">
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
                            <UButton variant="outline" color="gray">
                                Categories
                                <span v-if="selectedCategoryIds.length">
                                    ({{ selectedCategoryIds.length }})
                                </span>
                                <UIcon name="lucide:chevron-down" class="ml-2" />
                            </UButton>

                            <template #panel>
                                <div class="p-4 space-y-2 w-56 max-h-96 overflow-auto">
                                    <UCheckbox
                                        v-for="category in categories"
                                        :key="category.id"
                                        v-model="form.categories"
                                        :label="category.title"
                                        :value="category.id"
                                    />
                                </div>
                            </template>
                        </UPopover>

                        <UButton type="submit">
                            Search
                        </UButton>

                        <UButton
                            variant="ghost"
                            color="gray"
                            :href="route('home')"
                        >
                            Clear filters
                        </UButton>
                    </div>
                </UForm>

                <div class="grid grid-cols-1 gap-4 mt-8">
                    <div
                        v-for="config in configurations.data"
                        :key="config.id"
                        class="p-4 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
                    >
                        <div class="flex items-start justify-between">
                            <div class="flex-1">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                    <Link
                                        :href="route('configuration.show', config.slug)"
                                        class="hover:text-primary-500"
                                    >
                                        {{ config.title }}
                                    </Link>
                                </h3>
                                <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                    {{ config.description }}
                                </p>
                                <div class="flex items-center gap-4 mt-2 text-xs text-gray-500">
                                    <span class="flex items-center gap-1">
                                        <UIcon name="lucide:user" />
                                        {{ config.user.username }}
                                    </span>
                                    <UBadge color="gray">
                                        {{ config.version }}
                                    </UBadge>
                                    <UBadge color="gray">
                                        {{ config.language }}
                                    </UBadge>
                                    <span class="flex items-center gap-1">
                                        <UIcon name="lucide:heart" />
                                        {{ config.likes_count }}
                                    </span>
                                </div>
                            </div>
                            <img
                                v-if="config.image_url"
                                :src="config.image_url"
                                class="w-24 h-24 object-cover rounded-lg"
                            >
                        </div>
                    </div>
                </div>

                <div
                    v-if="configurations.links"
                    class="mt-8 flex justify-center"
                >
                    <UPagination
                        :links="configurations.links"
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
            </div>
        </div>
    </AppLayout>
</template>

<script>
import { defineComponent } from 'vue'
import { Link } from '@inertiajs/vue3'

export default defineComponent({
    components: {
        Link
    },
    props: ['configurations', 'categories'],

    data () {
        return {
            form: {
                search: new URLSearchParams(window.location.search).get('search') || '',
                version: new URLSearchParams(window.location.search).get('version') || null,
                language: new URLSearchParams(window.location.search).get('language') || null,
                categories: this.getCategoriesFromQuery()
            },
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

    computed: {
        selectedCategoryIds () {
            return this.form.categories.map(id => parseInt(id))
        }
    },

    methods: {
        getCategoriesFromQuery () {
            const cats = new URLSearchParams(window.location.search).get('categories')
            return cats ? cats.split(',').map(Number).filter(Boolean) : []
        },

        submitFilters () {
            const params = new URLSearchParams()

            if (this.form.search) params.set('search', this.form.search)
            if (this.form.version) params.set('version', this.form.version)
            if (this.form.language) params.set('language', this.form.language)
            if (this.form.categories.length) params.set('categories', this.form.categories.join(','))

            this.$inertia.get(route('home'), params, { preserveState: true })
        }
    }
})
</script>

<template>
    <Head title="Latest Configs" />
    <app-layout title="All Configs">
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-gray-800 dark:text-white">
                All Configs
            </h2>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <form @submit.prevent="submitFilters" class="space-y-4">
                    <div class="flex flex-wrap items-center gap-4">
                        <div class="relative grow max-w-md">
                            <div class="absolute inset-y-0 left-0 flex items-center px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </div>
                            <jet-input id="search" placeholder="Search..." type="search" class="block w-full pl-10" v-model="form.search" autofocus />
                        </div>

                        <select
                            name="version"
                            id="version"
                            v-model="form.version"
                            class="block py-2 pl-3 pr-10 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:text-white dark:border-gray-600"
                        >
                            <option :value="null">
                                Plugin Version
                            </option>
                            <option value="v2">
                                Gibberish v2
                            </option>
                            <option value="v3">
                                Gibberish v3
                            </option>
                        </select>

                        <select
                            name="language"
                            id="language"
                            v-model="form.language"
                            class="block py-2 pl-3 pr-10 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:text-white dark:border-gray-600"
                        >
                            <option :value="null">
                                All Languages
                            </option>
                            <option value="fr">
                                FR
                            </option>
                            <option value="de">
                                DE
                            </option>
                            <option value="en">
                                EN
                            </option>
                        </select>

                        <jet-dropdown align="right" width="60">
                            <template #trigger>
                                <span class="inline-flex rounded-md">
                                    <button type="button" class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition bg-white border border-transparent rounded-md hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600">
                                        Categories

                                        <span v-if="selectedCategoryIds.length">
                                            ({{selectedCategoryIds.length}})
                                        </span>

                                        <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 -mr-0.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </span>
                            </template>

                            <template #content>
                                <div class="w-56 px-4 py-2 space-y-2 overflow-auto text-sm max-h-96">
                                    <label :for="'cat_' + category.id" v-for="category in categories" :key="category.id" class="flex items-center">
                                        <jet-checkbox :name="'cat_' + category.id" :id="'cat_' + category.id" :value="category.id" v-model="form.categories" />

                                        <div class="ml-2 uppercase dark:text-white">
                                            {{ category.title }}
                                        </div>
                                    </label>
                                </div>
                            </template>
                        </jet-dropdown>

                        <jet-button type="submit">
                            Search
                        </jet-button>

                        <Link :href="route('home')" class="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                            Clear filters
                        </Link>
                    </div>
                </form>

                <div class="grid grid-cols-1 gap-4 mt-8">
                    <gibberish-config
                        v-for="config in configurations.data"
                        :key="config.id"
                        :config="config"
                    ></gibberish-config>
                </div>

                <div class="mt-8" v-if="configurations.links">
                    <div class="flex flex-wrap items-center justify-center gap-2">
                        <Link
                            v-for="(link, index) in configurations.links"
                            :key="index"
                            :href="link.url"
                            v-html="link.label"
                            class="px-3 py-1 text-sm border rounded-md"
                            :class="{
                                'bg-indigo-500 text-white border-indigo-500': link.active,
                                'text-gray-700 bg-white border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700': !link.active,
                                'opacity-50 cursor-not-allowed': !link.url
                            }"
                        />
                    </div>
                </div>

                <div class="text-center mt-8" v-if="configurations.data && configurations.data.length === 0">
                    <svg class="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <h3 class="mt-2 text-sm font-medium text-gray-900 dark:text-white">Nothing found.</h3>
                    <p class="mt-1 text-sm text-gray-500">No configs match your search criteria.</p>
                </div>

            </div>
        </div>
    </app-layout>
</template>

<script>
import { defineComponent } from 'vue'
import { Head, Link } from '@inertiajs/vue3'
import AppLayout from '@/Layouts/AppLayout.vue'
import JetInput from '@/Jetstream/Input.vue'
import JetDropdown from '@/Jetstream/Dropdown.vue'
import JetLabel from '@/Jetstream/Label.vue'
import JetCheckbox from '@/Jetstream/Checkbox.vue'
import JetButton from '@/Jetstream/Button.vue'
import GibberishConfig from '@/Components/GibberishConfig.vue'

export default defineComponent({
    props: ['configurations', 'categories'],

    components: {
        Head,
        Link,
        AppLayout,
        JetInput,
        JetDropdown,
        JetLabel,
        JetCheckbox,
        JetButton,
        GibberishConfig
    },

    data() {
        return {
            form: {
                search: new URLSearchParams(window.location.search).get('search') || '',
                version: new URLSearchParams(window.location.search).get('version') || null,
                language: new URLSearchParams(window.location.search).get('language') || null,
                categories: this.getCategoriesFromQuery(),
            }
        }
    },

    computed: {
        selectedCategoryIds() {
            return this.form.categories.map(id => parseInt(id))
        },
    },

    methods: {
        getCategoriesFromQuery() {
            const cats = new URLSearchParams(window.location.search).get('categories')
            return cats ? cats.split(',').map(Number).filter(Boolean) : []
        },

        submitFilters() {
            const params = new URLSearchParams()
            
            if (this.form.search) params.set('search', this.form.search)
            if (this.form.version) params.set('version', this.form.version)
            if (this.form.language) params.set('language', this.form.language)
            if (this.form.categories.length) params.set('categories', this.form.categories.join(','))
            
            this.$inertia.get(route('home'), params, { preserveState: true })
        },
    },
})
</script>

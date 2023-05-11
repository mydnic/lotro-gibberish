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
                <div class="flex items-center space-x-8">
                    <div class="relative block grow">
                        <div class="absolute inset-y-0 left-0 flex items-center px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </div>
                        <jet-input id="search" placeholder="Search..." type="search" class="block w-full pl-10" v-model="filters.search" autofocus />
                    </div>

                    <div class="items-center hidden space-x-5 md:flex">
                        <jet-label>Languages:</jet-label>
                        <label for="lang.fr" class="flex items-center">
                            <jet-checkbox name="lang.fr" id="lang.fr" v-model:checked="filters.languages.fr" />

                            <div class="ml-1 uppercase dark:text-white">
                                FR
                            </div>
                        </label>
                        <label for="lang.de" class="flex items-center">
                            <jet-checkbox name="lang.de" id="lang.de" v-model:checked="filters.languages.de" />

                            <div class="ml-1 uppercase dark:text-white">
                                de
                            </div>
                        </label>
                        <label for="lang.en" class="flex items-center">
                            <jet-checkbox name="lang.en" id="lang.en" v-model:checked="filters.languages.en" />

                            <div class="ml-1 uppercase dark:text-white">
                                en
                            </div>
                        </label>
                    </div>

                    <jet-dropdown align="right" width="60">
                        <template #trigger>
                            <span class="inline-flex rounded-md">
                                <button type="button" class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition bg-white border border-transparent rounded-md hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50">
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
                                <label :for="category.id" v-for="category in categories" :key="category.id" class="flex items-center">
                                    <jet-checkbox :name="category.id" :id="category.id" v-model:checked="filters.categories[category.id]" />

                                    <div class="ml-2 uppercase">
                                        {{ category.title }}
                                    </div>
                                </label>
                            </div>
                        </template>
                    </jet-dropdown>
                </div>

                <div class="grid grid-cols-1 gap-4 mt-8">
                    <gibberish-config
                        v-for="config in filteredConfigurations"
                        :key="config.id"
                        :config="config"
                    ></gibberish-config>
                </div>

                <div class="text-center" v-if="filteredConfigurations.length === 0">
                    <svg class="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <h3 class="mt-2 text-sm font-medium text-gray-900">Nothing found.</h3>
                    <p class="mt-1 text-sm text-gray-500">No luck</p>
                </div>

            </div>
        </div>
    </app-layout>
</template>

<script>
import { defineComponent } from 'vue'
import AppLayout from '@/Layouts/AppLayout.vue'
import JetInput from '@/Jetstream/Input.vue'
import JetDropdown from '@/Jetstream/Dropdown.vue'
import JetLabel from '@/Jetstream/Label.vue'
import JetCheckbox from '@/Jetstream/Checkbox.vue'
import GibberishConfig from '@/Components/GibberishConfig.vue'

export default defineComponent({
    props: ['configurations', 'categories'],

    components: {
        AppLayout,
        JetInput,
        JetDropdown,
        JetLabel,
        JetCheckbox,
        GibberishConfig
    },

    computed: {
        selectedCategoryIds() {
            return Object.keys(this.filters.categories)
                        .filter(key => this.filters.categories[key])
                        .map(id => parseInt(id))
        },

        filteredConfigurations() {
            return this.configurations
                .filter(config => {
                    if (this.filters.search) {
                        return config.title.toLowerCase().includes(this.filters.search.toLowerCase()) ||
                            config.description.toLowerCase().includes(this.filters.search.toLowerCase())
                    }
                    return true
                })
                .filter(config => {

                    if (this.filters.languages.fr && config.language === 'fr') {
                        return true
                    }

                    if (this.filters.languages.de && config.language === 'de') {
                        return true
                    }

                    if (this.filters.languages.en && config.language === 'en') {
                        return true
                    }

                    return false

                })
                .filter(config => {
                    if (this.selectedCategoryIds.length) {
                        return this.selectedCategoryIds.includes(config.category_id)
                    }
                    return true
                })

        }
    },

    data() {
        return {
            filters: {
                languages: {
                    fr: true,
                    de: true,
                    en: true,
                },
                categories: {},
            }
        }
    },
})
</script>

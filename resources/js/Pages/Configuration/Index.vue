<template>
    <app-layout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                All Configs
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="flex items-center space-x-8">
                    <div class="relative grow block">
                        <div class="flex absolute inset-y-0 left-0 flex items-center px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </div>
                        <jet-input id="search" placeholder="Search..." type="search" class="pl-10 block w-full" v-model="filters.search" autofocus />
                    </div>

                    <div class="flex items-center space-x-5">
                        <jet-label>Languages:</jet-label>
                        <div class="flex items-center">
                            <jet-checkbox name="lang.fr" id="lang.fr" v-model:checked="filters.languages.fr" />

                            <div class="ml-1 uppercase">
                                FR
                            </div>
                        </div>
                        <div class="flex items-center">
                            <jet-checkbox name="lang.de" id="lang.de" v-model:checked="filters.languages.de" />

                            <div class="ml-1 uppercase">
                                de
                            </div>
                        </div>
                        <div class="flex items-center">
                            <jet-checkbox name="lang.en" id="lang.en" v-model:checked="filters.languages.en" />

                            <div class="ml-1 uppercase">
                                en
                            </div>
                        </div>
                    </div>

                    <jet-dropdown align="right" width="60">
                        <template #trigger>
                            <span class="inline-flex rounded-md">
                                <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition">
                                    Categories

                                    <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 -mr-0.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </span>
                        </template>

                        <template #content>
                            <div class="w-56 max-h-96 text-sm overflow-auto px-4 space-y-2 py-2">
                                <div v-for="category in categories" :key="category.id" class="flex items-center">
                                    <jet-checkbox name="lang.fr" id="lang.fr" v-model:checked="filters.categories[category.id]" />

                                    <div class="ml-2 uppercase">
                                        {{ category.title }}
                                    </div>
                                </div>
                            </div>
                        </template>
                    </jet-dropdown>
                </div>

                <div class="grid grid-cols-1 gap-4 mt-8">
                    <gibberish-config
                        v-for="config in configurations"
                        :key="config.id"
                        :config="config"
                    ></gibberish-config>
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

    data() {
        return {
            filters: {
                languages: {
                    fr: false,
                    de: false,
                    en: false,
                },
                categories: {},
            }
        }
    },
})
</script>

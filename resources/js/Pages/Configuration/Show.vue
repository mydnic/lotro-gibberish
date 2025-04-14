<template>
<app-layout :title="configuration.title">
    <template #header>
        <div class="flex items-center justify-between">
            <h1 class="text-xl font-semibold leading-tight text-gray-800 dark:text-white">
                {{configuration.title}}
            </h1>

            <Link
                as="button"
                method="post"
                :href="route('configuration.like', configuration.uuid)"
                class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                <svg v-if="liked" class="w-4 h-4 -ml-0.5 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg v-else class="w-4 h-4 -ml-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                <span v-if="liked">Starred</span>
                <span v-else>Stars</span>
                <span class="inline-flex ml-3 items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">{{ configuration.like_counter?.count || 0 }}</span>
            </Link>
        </div>
    </template>

    <div class="py-12">
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="px-6 py-3 bg-white rounded dark:bg-slate-500">

                <div class="lg:flex lg:items-center lg:justify-between">
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center justify-between">
                            <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate dark:text-white">
                                {{ configuration.title }}
                            </h2>

                            <span
                                class="inline-flex items-center rounded-full px-4 py-2 font-bold"
                                :class="{
                                    'bg-red-100 text-red-700': configuration.version === 'v2',
                                    'bg-green-100 text-green-700': configuration.version === 'v3',
                                }"
                            >
                                Gibberish {{ configuration.version }}
                            </span>
                        </div>
                        <div class="flex flex-col mt-2 sm:flex-row sm:flex-wrap sm:space-x-6">
                            <div class="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-300" title="Category">
                                <img class="flex-shrink-0 mr-1.5 h-6 w-6" :src="'/icons/' + configuration.category.icon_path" :alt="configuration.category.title">
                                {{ configuration.category.title }}
                            </div>
                            <div class="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-300" title="Author">
                                <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 mr-1.5 h-5 w-5 dark:text-gray-200 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                {{ configuration.user.username }}
                            </div>
                            <div class="flex items-center mt-2 text-sm text-gray-500 uppercase dark:text-gray-300 dark:3ext-gray-100" title="Author">
                                <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 mr-1.5 h-5 w-5 dark:text-gray-200 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
                                {{ configuration.language }}
                            </div>
                            <div class="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-300" title="Likes Count">
                                <svg class="flex-shrink-0 mr-1.5 h-5 w-5 dark:text-gray-200 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                                {{ configuration.like_counter?.count || 0 }}
                            </div>
                            <div class="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-300" title="Last updated on">
                                <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 mr-1.5 h-5 w-5 dark:text-gray-200 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                {{ formatDate(configuration.updated_at) }}
                            </div>
                            <div class="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-300" title="Likes Count">
                                <svg class="flex-shrink-0 mr-1.5 h-5 w-5 dark:text-gray-200 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"/>
                                </svg>
                                updated {{ configuration.updated_count }} times
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pt-8 prose whitespace-pre-line max-w-none dark:prose-invert dark:text-white" v-html="configuration.formatted_description" />
                <div class="p-10">
                    <div class="flex items-center justify-end mb-4">
                        <jet-action-message :on="copied" class="mr-3">
                            Copied !
                        </jet-action-message>
                        <button @click="copy">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                        </button>
                    </div>
                    <pre class="p-2 overflow-auto text-sm bg-gray-100 border border-gray-300 rounded-md" v-text="configuration.code" />
                </div>
            </div>
        </div>
    </div>
</app-layout>
</template>

<script>
import { defineComponent } from 'vue'
import dayjs from 'dayjs'
import AppLayout from '@/Layouts/AppLayout.vue'
import JetActionMessage from '@/Jetstream/ActionMessage.vue'
import JetButton from '@/Jetstream/Button.vue'
import JetSecondaryButton from '@/Jetstream/SecondaryButton.vue'
import useClipboard from 'vue-clipboard3'
const { toClipboard } = useClipboard()
import { Link } from '@inertiajs/vue3';

export default defineComponent({
    props: ['configuration', 'liked'],

    components: {
        AppLayout,
        Link,
        JetActionMessage,
        JetButton,
        JetSecondaryButton
    },

    data() {
        return {
            copied: false
        }
    },

    methods: {
        formatDate(dateString) {
            return dayjs(dateString).format('DD/MM/YYYY')
        },

        async copy() {
            try {
                await toClipboard(this.configuration.code)
                this.copied = true
            } catch (e) {
                console.error(e)
            }
        }
    }
})
</script>

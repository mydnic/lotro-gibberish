<template>
    <div class="px-6 py-3 bg-white">

        <div class="lg:flex lg:items-center lg:justify-between">
            <div class="flex-1 min-w-0">
                <h2 @click="goToConfigPage" class="text-2xl font-bold leading-7 text-gray-900 cursor-pointer sm:text-3xl sm:truncate">
                    {{ config.title }}
                </h2>
                <div>
                    <p class="mt-1 leading-5 text-gray-500 whitespace-pre line-clamp-1" v-html="config.description" />
                </div>
                <div class="flex flex-col mt-2 sm:flex-row sm:flex-wrap sm:space-x-6" title="category">
                    <div class="flex items-center mt-2 text-sm text-gray-500">
                        <img class="flex-shrink-0 mr-1.5 h-6 w-6 text-gray-400" :src="'/icons/' + config.category.icon_path" :alt="config.category.title">
                        {{ config.category.title }}
                    </div>
                    <div class="flex items-center mt-2 text-sm text-gray-500" title="author">
                        <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {{ config.user.username }}
                    </div>
                    <div class="flex items-center mt-2 text-sm text-gray-500 uppercase" title="language">
                        <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
                        {{ config.language }}
                    </div>
                    <div class="flex items-center mt-2 text-sm text-gray-500" title="last updated on:">
                        <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        {{ formatDate(config.updated_at) }}
                    </div>
                    <div class="flex items-center mt-2 text-sm text-gray-500" title="Likes Count">
                        <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                        {{ config.like_counter?.count || 0 }}
                    </div>
                </div>
            </div>
            <div class="flex mt-5 space-x-2 lg:mt-0 lg:ml-4">
                <jet-secondary-button @click="goToConfigPage">
                    Detail
                </jet-secondary-button>
                <jet-button @click="showModal = true">
                    Get Config
                </jet-button>
            </div>
        </div>
        <modal :show="showModal" @close="closeModal" max-width="md">
            <div class="p-10">
                <div class="prose break-words truncate whitespace-normal" v-html="config.formatted_description" />

                <pre class="p-2 overflow-auto text-sm bg-gray-100 border border-gray-300 rounded-md mt-14" v-html="config.code" />

                <div class="flex items-center justify-end mt-4">
                    <jet-action-message :on="copied" class="mr-3">
                        Copied !
                    </jet-action-message>
                    <button @click="copy">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                    </button>
                </div>

            </div>
        </modal>
    </div>
</template>v

<script>
import { defineComponent } from 'vue'
import dayjs from 'dayjs'
import Modal from '@/Jetstream/Modal.vue'
import JetActionMessage from '@/Jetstream/ActionMessage.vue'
import JetSecondaryButton from '@/Jetstream/SecondaryButton.vue'
import JetButton from '@/Jetstream/Button.vue'
import useClipboard from 'vue-clipboard3'

const { toClipboard } = useClipboard()

export default defineComponent({
    props: ['config'],

    components: {
        Modal,
        JetActionMessage,
        JetSecondaryButton,
        JetButton
    },

    data() {
        return {
            showModal: false,
            copied: false,
        }
    },

    methods: {
        goToConfigPage() {
            this.$inertia.visit(route('configuration.show', this.config.uuid))
        },

        closeModal() {
            this.showModal = false
            this.copied = false
        },

        formatDate(dateString) {
            return dayjs(dateString).format('DD/MM/YYYY')
        },

        async copy() {
            try {
                await toClipboard(this.config.code)
                this.copied = true
            } catch (e) {
                console.error(e)
            }
        }
    }
})
</script>

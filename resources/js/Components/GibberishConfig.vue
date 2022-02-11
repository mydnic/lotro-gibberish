<template>
    <div class="bg-white px-6 py-3">

        <div class="lg:flex lg:items-center lg:justify-between">
            <div class="flex-1 min-w-0">
                <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                    {{ config.title }}
                </h2>
                <div>
                    <p class="mt-1 leading-5 text-gray-500 truncate">
                        {{ config.description }}
                    </p>
                </div>
                <div class="mt-2 flex flex-col sm:flex-row sm:flex-wrap sm:space-x-6">
                    <div class="mt-2 flex items-center text-sm text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
                        {{ config.category.title }}
                    </div>
                    <div class="mt-2 flex items-center text-sm text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {{ config.user.username }}
                    </div>
                    <div class="mt-2 flex uppercase items-center text-sm text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
                        {{ config.language }}
                    </div>
                    <div class="mt-2 flex items-center text-sm text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        {{ formatDate(config.created_at) }}
                    </div>
                </div>
            </div>
            <div class="mt-5 flex lg:mt-0 lg:ml-4">
                <button @click="showModal = true" type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Get Config
                </button>
            </div>
        </div>
        <modal :show="showModal" @close="closeModal" max-width="md">
            <div class="p-10">
                <pre class="bg-gray-100 rounded-md border border-gray-300 p-2 overflow-auto text-sm" v-html="config.code" />

                <div class="mt-4 flex items-center justify-end">
                    <jet-action-message :on="copied" class="mr-3">
                        Copied !
                    </jet-action-message>
                    <button @click="copy">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
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
import useClipboard from 'vue-clipboard3'

const { toClipboard } = useClipboard()

export default defineComponent({
    props: ['config'],

    components: {
        Modal,
        JetActionMessage
    },

    data() {
        return {
            showModal: false,
            copied: false,
        }
    },

    methods: {
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

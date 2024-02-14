<template>
    <app-layout title="Publish new Config">
        <template #header>
            <div class="flex items-center justify-between">
                <h2 class="text-xl font-semibold leading-tight text-gray-800 dark:text-white">
                    Publish new Config
                </h2>
            </div>
        </template>

        <div
            class="relative py-12"
        >
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <jet-validation-errors class="mb-4" />

                <form @submit.prevent="submit">
                    <div>
                        <jet-label for="title" value="Title" />
                        <jet-input id="title" type="text" class="block w-full mt-1" v-model="form.title" required autofocus autocomplete="name" />
                    </div>

                    <div class="mt-4">
                        <div class="flex items-center justify-between">
                            <jet-label for="description" value="Description" />
                            <span v-if="uploading" class="flex space-x-2 text-sm text-white itemsc-center">
                                <svg class="w-4 h-4 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Uploading image...</span>
                            </span>
                            <label v-else for="image" class="cursor-pointer">
                                <input multiple accept="image/*" type="file" id="image" class="hidden" name="image" @change="fileChange">
                                <svg class="w-5 h-5 text-gray-700 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/></svg>
                            </label>
                        </div>
                        <jet-textarea
                            @drop.prevent="onDrop"
                            @dragover="dragging = true"
                            @dragleave="dragging = false"
                            id="description"
                            placeholder="Write a small description about this gibberish config... what it does, etc. Links are automatically formated."
                            class="block w-full mt-1"
                            :class="{
                                'bg-gray-100/10': dragging
                            }"
                            v-model="form.description"
                            @paste="pasteFunction"
                            required
                        />
                        <p class="mt-1 text-xs italic text-gray-500 dark:text-gray-300">
                            Links are automatically formated and images (url) are automatically embeded, you can paste an image to upload it.
                        </p>
                    </div>

                    <div class="mt-4">
                        <jet-label for="code" value="Export Code" />
                        <jet-textarea id="code" placeholder="Paste Code here" class="block w-full mt-1" v-model="form.code" required />
                    </div>

                    <div class="mt-4">
                        <jet-label for="version" value="Plugin Version" />
                        <select name="version" id="version" v-model="form.version" required class="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option value="v2">
                                Gibberish v2
                            </option>
                            <option value="v3">
                                Gibberish v3
                            </option>
                        </select>
                    </div>

                    <div class="mt-4">
                        <jet-label for="language" value="Language" />
                        <div class="flex items-center mt-1 space-x-3">
                            <button
                                type="button"
                                @click="form.language = 'en'"
                                class="px-5 py-2 text-sm font-medium uppercase border rounded-md focus:outline-none"
                                :class="{
                                    'bg-indigo-600 border-transparent text-white hover:bg-indigo-700': form.language === 'en',
                                    'bg-white border-gray-200 text-gray-900 hover:bg-gray-50': form.language !== 'en',
                                }"
                            >EN</button>
                            <button
                                type="button"
                                @click="form.language = 'fr'"
                                class="px-5 py-2 text-sm font-medium uppercase border rounded-md focus:outline-none"
                                :class="{
                                    'bg-indigo-600 border-transparent text-white hover:bg-indigo-700': form.language === 'fr',
                                    'bg-white border-gray-200 text-gray-900 hover:bg-gray-50': form.language !== 'fr',
                                }"
                            >FR</button>
                            <button
                                type="button"
                                @click="form.language = 'de'"
                                class="px-5 py-2 text-sm font-medium uppercase border rounded-md focus:outline-none"
                                :class="{
                                    'bg-indigo-600 border-transparent text-white hover:bg-indigo-700': form.language === 'de',
                                    'bg-white border-gray-200 text-gray-900 hover:bg-gray-50': form.language !== 'de',
                                }"
                            >DE</button>
                        </div>
                    </div>

                    <div class="mt-4">
                        <jet-label for="category" value="Category" />
                        <select name="category_id" id="category" v-model="form.category_id" required class="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option>Chose a category</option>
                            <option v-for="category in categories" :key="category.id" :value="category.id">
                                {{ category.title }}
                            </option>
                        </select>
                    </div>

                    <div class="mt-4" >
                        <jet-label for="terms">
                            <div class="flex items-center">
                                <jet-checkbox name="public" id="public" v-model:checked="form.is_public" />

                                <div class="ml-2">
                                    Everyone can see this Config
                                </div>
                            </div>
                        </jet-label>
                    </div>

                    <div class="flex items-center justify-end mt-4">
                        <jet-button class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            Publish
                        </jet-button>
                    </div>
                </form>
            </div>
        </div>
    </app-layout>
</template>

<script>
import { defineComponent } from 'vue'
import AppLayout from '@/Layouts/AppLayout.vue'
import { Link } from '@inertiajs/vue3';
import JetButton from '@/Jetstream/Button.vue'
import JetInput from '@/Jetstream/Input.vue'
import JetTextarea from '@/Jetstream/Textarea.vue'
import JetCheckbox from '@/Jetstream/Checkbox.vue'
import JetLabel from '@/Jetstream/Label.vue'
import JetValidationErrors from '@/Jetstream/ValidationErrors.vue'
import axios from 'axios'

export default defineComponent({
    props: ['categories'],

    components: {
        AppLayout,
        Link,
        JetButton,
        JetTextarea,
        JetInput,
        JetCheckbox,
        JetLabel,
        JetValidationErrors,
    },

    data() {
        return {
            uploading: false,
            dragging: false,
            form: this.$inertia.form({
                title: '',
                description: '',
                code: '',
                version: 'v3',
                language: 'en',
                category_id: null,
                is_public: true,
            })
        }
    },

    methods: {
        submit() {
            this.form.post(this.route('user.configuration.store'), {
                // onFinish: () => this.form.reset('password', 'password_confirmation'),
            })
        },

        pasteFunction(pasteEvent, callback) {
            if(pasteEvent.clipboardData == false){
                if(typeof(callback) == "function"){
                    // console.log('Undefined ')
                    callback(undefined);
                }
            };

            var items = pasteEvent.clipboardData.items;

            if(items == undefined){
                if(typeof(callback) == "function"){
                    callback(undefined);
                    // console.log('Undefined 2')
                }
            };
            for (var i = 0; i < items.length; i++) {
                if (items[i].type.indexOf("image") == -1) continue;
                var blob = items[i].getAsFile();
                this.addImage(blob)
            }
        },

        onDrop(dropEvent) {
            const items = dropEvent.dataTransfer.files

            for (var i = 0; i < items.length; i++) {
                if (items[i].type.indexOf("image") == -1) continue;
                var blob = items[i]
                this.addImage(blob)
            }
        },

        fileChange(event) {
            const items = event.target.files

            for (var i = 0; i < items.length; i++) {
                if (items[i].type.indexOf("image") == -1) continue;
                var blob = items[i]
                this.addImage(blob)
            }
        },

        addImage(blob) {
            this.uploading = true

            const formData = new FormData()
            formData.append('image', blob)

            axios.post('/auth/upload',formData)
                .then(response => {
                    this.uploading = false
                    this.dragging = false

                    const url = response.data

                    this.form.description += `\n`
                    this.form.description += url
                })
                .catch(error => {
                    alert('Error, maybe the file is too large.')
                })
        }
    }
})
</script>

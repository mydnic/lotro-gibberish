<template>
    <app-layout title="Publish new Config">
        <template #header>
            <div class="flex items-center justify-between">
                <h2 class="text-xl font-semibold leading-tight text-gray-800 dark:text-white">
                    Publish new Config
                </h2>
            </div>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <jet-validation-errors class="mb-4" />

                <form @submit.prevent="submit">
                    <div>
                        <jet-label for="title" value="Title" />
                        <jet-input id="title" type="text" class="block w-full mt-1" v-model="form.title" required autofocus autocomplete="name" />
                    </div>

                    <div class="mt-4">
                        <jet-label for="description" value="Description" />
                        <jet-textarea id="description" placeholder="Write a small description about this gibberish config... what it does, etc. Links are automatically formated." class="block w-full mt-1" v-model="form.description" required />
                        <p class="mt-1 text-xs italic text-gray-500">
                            Links are automatically formated and images (url) are automatically embeded.
                        </p>
                    </div>

                    <div class="mt-4">
                        <jet-label for="code" value="Export Code" />
                        <jet-textarea id="code" placeholder="Paste Code here" class="block w-full mt-1" v-model="form.code" required />
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
import { Link } from '@inertiajs/inertia-vue3';
import JetButton from '@/Jetstream/Button.vue'
import JetInput from '@/Jetstream/Input.vue'
import JetTextarea from '@/Jetstream/Textarea.vue'
import JetCheckbox from '@/Jetstream/Checkbox.vue'
import JetLabel from '@/Jetstream/Label.vue'
import JetValidationErrors from '@/Jetstream/ValidationErrors.vue'

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
            form: this.$inertia.form({
                title: '',
                description: '',
                code: '',
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
        }
    }
})
</script>

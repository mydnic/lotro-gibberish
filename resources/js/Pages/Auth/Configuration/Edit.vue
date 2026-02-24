<template>
    <AppLayout title="Edit Config">
        <UCard>
            <template #header>
                <div class="flex items-center justify-between">
                    <h2 class="text-xl font-semibold leading-tight text-gray-800 dark:text-white">
                        Edit Config
                    </h2>
                    <div class="flex items-center space-x-3">
                        <UButton
                            variant="outline"
                            color="primary"
                            @click="goToPublicPage"
                        >
                            Get public link
                        </UButton>
                        <DeleteConfigButton :configuration="configuration" />
                    </div>
                </div>
            </template>

            <UForm
                ref="form"
                :state="form"
                class="space-y-6"
                @submit.prevent="submit"
            >
                <UFormField
                    label="Title"
                    required
                    name="title"
                >
                    <UInput
                        v-model="form.title"
                        class="w-full"
                        autofocus
                        autocomplete="name"
                    />
                </UFormField>

                <UFormField
                    label="Description"
                    required
                    name="description"
                    helper-text="Links are automatically formated and images (url) are automatically embeded, you can paste an image to upload it."
                >
                    <template #hint>
                        <span
                            v-if="uploading"
                            class="flex space-x-2 text-sm text-white itemsc-center"
                        >
                            <svg
                                class="w-4 h-4 text-white animate-spin"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    class="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    stroke-width="4"
                                />
                                <path
                                    class="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                />
                            </svg>
                            <span>Uploading image...</span>
                        </span>
                        <label
                            v-else
                            for="image"
                            class="cursor-pointer"
                        >
                            <input
                                id="image"
                                multiple
                                accept="image/*"
                                type="file"
                                class="hidden"
                                name="image"
                                @change="fileChange"
                            >
                            <svg
                                class="w-5 h-5 text-gray-700 dark:text-gray-300"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            ><path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                            /></svg>
                        </label>
                    </template>
                    <UTextarea
                        v-model="form.description"
                        class="w-full"
                        placeholder="Write a small description about this gibberish config... what it does, etc. Links are automatically formated."
                        required
                        @drop.prevent="onDrop"
                        @dragover="dragging = true"
                        @dragleave="dragging = false"
                        @paste="pasteFunction"
                    />
                </UFormField>

                <UFormField
                    required
                    label="Export Code"
                    name="code"
                >
                    <UTextarea
                        v-model="form.code"
                        placeholder="Paste Code here"
                        class="w-full"
                        required
                    />
                </UFormField>

                <UFormField
                    label="Plugin Version"
                    required
                    name="version"
                >
                    <USelect
                        v-model="form.version"
                        name="version"
                        required
                        class="w-full"
                        :items="[
                            { value: 'v2', label: 'Gibberish v2' },
                            { value: 'v3', label: 'Gibberish v3' }
                        ]"
                    />
                </UFormField>

                <UFormField
                    label="Language"
                    name="language"
                    required
                >
                    <URadioGroup
                        v-model="form.language"
                        orientation="horizontal"
                        color="primary"
                        variant="card"
                        :items="['en', 'fr', 'de']"
                    />
                </UFormField>

                <UFormField
                    label="Category"
                    name="category"
                    required
                >
                    <USelectMenu
                        v-model="form.category_id"
                        color="primary"
                        :items="categories.map(category => ({
                            value: category.id,
                            label: category.title,
                            avatar: {
                                src: '/icons/' + category.icon_path
                            }
                        }))"
                        class="w-full"
                        required
                    />
                </UFormField>

                <UFormField
                    label="Public"
                    name="public"
                >
                    <USwitch
                        v-model="form.is_public"
                        label="Everyone can see this Config"
                    />
                </UFormField>

                <div class="flex items-center justify-end">
                    <UButton
                        :loading="form.processing"
                        type="submit"
                    >
                        Update
                    </UButton>
                </div>
            </UForm>
        </UCard>
    </AppLayout>
</template>

<script>
import { defineComponent } from 'vue'
import AppLayout from '@/Layouts/AppLayout.vue'
import DeleteConfigButton from '@/Components/DeleteConfigButton.vue'
import axios from 'axios'

export default defineComponent({

    components: {
        AppLayout,
        DeleteConfigButton
    },
    props: ['categories', 'configuration'],

    data () {
        const defaultCategory = this.categories?.find?.(category => category.id === this.configuration.category_id)

        return {
            uploading: false,
            dragging: false,
            form: this.$inertia.form({
                title: this.configuration.title,
                description: this.configuration.description,
                code: this.configuration.code,
                version: this.configuration.version,
                language: this.configuration.language,
                category_id: defaultCategory
                    ? {
                            value: defaultCategory.id,
                            label: defaultCategory.title,
                            avatar: {
                                src: '/icons/' + defaultCategory.icon_path
                            }
                        }
                    : null,
                is_public: !!this.configuration.is_public
            })
        }
    },

    methods: {
        submit () {
            this.form.transform(data => ({
                ...data,
                category_id: data.category_id?.value ?? data.category_id
            })).put(this.route('user.configuration.update', this.configuration.uuid), {
                preserveScroll: true
            })
        },

        goToPublicPage () {
            this.$inertia.visit(route('configuration.show', this.configuration.uuid))
        },

        pasteFunction (pasteEvent, callback) {
            if (pasteEvent.clipboardData == false) {
                if (typeof (callback) == 'function') {
                    callback(undefined)
                }
            };

            var items = pasteEvent.clipboardData.items

            if (items == undefined) {
                if (typeof (callback) == 'function') {
                    callback(undefined)
                }
            };
            for (var i = 0; i < items.length; i++) {
                if (items[i].type.indexOf('image') == -1) continue
                var blob = items[i].getAsFile()
                this.addImage(blob)
            }
        },

        onDrop (dropEvent) {
            const items = dropEvent.dataTransfer.files

            for (var i = 0; i < items.length; i++) {
                if (items[i].type.indexOf('image') == -1) continue
                var blob = items[i]
                this.addImage(blob)
            }
        },

        fileChange (event) {
            const items = event.target.files

            for (var i = 0; i < items.length; i++) {
                if (items[i].type.indexOf('image') == -1) continue
                var blob = items[i]
                this.addImage(blob)
            }
        },

        addImage (blob) {
            this.uploading = true

            const formData = new FormData()
            formData.append('image', blob)

            axios.post('/auth/upload', formData)
                .then((response) => {
                    this.uploading = false
                    this.dragging = false

                    const url = response.data

                    this.form.description += `\n`
                    this.form.description += url
                })
                .catch(() => {
                    alert('Error, maybe the file is too large.')
                })
        }
    }
})
</script>

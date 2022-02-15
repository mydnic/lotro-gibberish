<template>
    <jet-danger-button @click="showDeleteModal = true">
        Delete
    </jet-danger-button>

    <jet-dialog-modal :show="showDeleteModal" @close="showDeleteModal = false">
        <template #title>
            Delete Configuration
        </template>

        <template #content>
            Are you sure you want to delete this configuration? It will be permanently deleted.
        </template>

        <template #footer>
            <jet-secondary-button @click="showDeleteModal = false">
                Cancel
            </jet-secondary-button>

            <jet-danger-button class="ml-3" @click="deleteConfig" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Delete Configuration
            </jet-danger-button>
        </template>
    </jet-dialog-modal>
</template>

<script>
import { defineComponent } from 'vue'
import JetDangerButton from '@/Jetstream/DangerButton.vue'
import JetSecondaryButton from '@/Jetstream/SecondaryButton.vue'
import JetDialogModal from '@/Jetstream/DialogModal.vue'

export default defineComponent({
    props: ['configuration'],

    components: {
        JetDialogModal,
        JetSecondaryButton,
        JetDangerButton,
    },

    data() {
        return {
            showDeleteModal: false,
            form: this.$inertia.form(),
        }
    },

    methods: {
        deleteConfig() {
            this.form.delete(route('user.configuration.destroy', this.configuration.uuid))
        }
    }
})
</script>

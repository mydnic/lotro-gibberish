<template>
    <UModal
        title="Delete Configuration"
        description="Are you sure you want to delete this configuration? It will be permanently deleted."
    >
        <UButton
            variant="ghost"
            color="error"
        >
            Delete
        </UButton>

        <template #body>
            <div class="flex justify-between">
                <UButton
                    color="neutral"
                    variant="outline"
                >
                    Cancel
                </UButton>

                <UButton
                    color="error"
                    @click="deleteConfig"
                >
                    Delete
                </UButton>
            </div>
        </template>
    </UModal>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: ['configuration'],

    data () {
        return {
            showDeleteModal: false
        }
    },

    methods: {
        deleteConfig () {
            this.$inertia.delete(route('user.configuration.destroy', this.configuration.uuid))
        }
    }
})
</script>

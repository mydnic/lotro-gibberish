<template>
    <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
            <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">Delete Account</h3>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">Permanently delete your account.</p>
        </div>

        <div class="mt-5 md:mt-0 md:col-span-2">
            <UCard>
                <div class="max-w-xl text-sm text-gray-600 dark:text-gray-300">
                    Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.
                </div>

                <div class="mt-5">
                    <UButton color="error" @click="confirmUserDeletion">
                        Delete Account
                    </UButton>
                </div>
            </UCard>
        </div>
    </div>

    <!-- Delete Account Confirmation Modal -->
    <UModal v-model:open="confirmingUserDeletion" title="Delete Account" description="Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm.">
        <template #body>
            <UFormField label="Password" :error="form.errors.password">
                <UInput
                    type="password"
                    class="w-full"
                    placeholder="Password"
                    v-model="form.password"
                    @keyup.enter="deleteUser"
                />
            </UFormField>
        </template>

        <template #footer>
            <div class="flex justify-end gap-3">
                <UButton variant="outline" color="neutral" @click="closeModal">
                    Cancel
                </UButton>

                <UButton color="error" @click="deleteUser" :loading="form.processing" :disabled="form.processing">
                    Delete Account
                </UButton>
            </div>
        </template>
    </UModal>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            confirmingUserDeletion: false,

            form: this.$inertia.form({
                password: '',
            })
        }
    },

    methods: {
        confirmUserDeletion() {
            this.confirmingUserDeletion = true
        },

        deleteUser() {
            this.form.delete(route('current-user.destroy'), {
                preserveScroll: true,
                onSuccess: () => this.closeModal(),
                onFinish: () => this.form.reset(),
            })
        },

        closeModal() {
            this.confirmingUserDeletion = false
            this.form.reset()
        },
    },
})
</script>

<template>
    <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
            <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">Update Password</h3>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">Ensure your account is using a long, random password to stay secure.</p>
        </div>

        <div class="mt-5 md:mt-0 md:col-span-2">
            <UCard>
                <form @submit.prevent="updatePassword">
                    <div class="space-y-4">
                        <UFormField label="Current Password" :error="form.errors.current_password">
                            <UInput id="current_password" type="password" class="w-full" v-model="form.current_password" autocomplete="current-password" />
                        </UFormField>

                        <UFormField label="New Password" :error="form.errors.password">
                            <UInput id="password" type="password" class="w-full" v-model="form.password" autocomplete="new-password" />
                        </UFormField>

                        <UFormField label="Confirm Password" :error="form.errors.password_confirmation">
                            <UInput id="password_confirmation" type="password" class="w-full" v-model="form.password_confirmation" autocomplete="new-password" />
                        </UFormField>
                    </div>

                    <div class="flex items-center justify-end mt-6 gap-3">
                        <span v-if="form.recentlySuccessful" class="text-sm text-gray-600 dark:text-gray-400">Saved.</span>
                        <UButton type="submit" :loading="form.processing" :disabled="form.processing">
                            Save
                        </UButton>
                    </div>
                </form>
            </UCard>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            form: this.$inertia.form({
                current_password: '',
                password: '',
                password_confirmation: '',
            }),
        }
    },

    methods: {
        updatePassword() {
            this.form.put(route('user-password.update'), {
                errorBag: 'updatePassword',
                preserveScroll: true,
                onSuccess: () => this.form.reset(),
                onError: () => {
                    if (this.form.errors.password) {
                        this.form.reset('password', 'password_confirmation')
                    }

                    if (this.form.errors.current_password) {
                        this.form.reset('current_password')
                    }
                }
            })
        },
    },
})
</script>

<template>
    <AppLayout title="Reset Password">
        <div class="h-[80vh] space-y-10 flex flex-col items-center justify-center">
            <img
                class="block dark:hidden"
                :src="'/logo/icon-dark.svg'"
                alt="Lotro gibberish config logo"
            >
            <img
                class="hidden dark:block"
                :src="'/logo/icon.svg'"
                alt="Lotro gibberish config logo"
            >

            <UCard class="md:w-1/2 w-full">
                <template #header>
                    <h2 class="text-lg font-medium text-gray-900 dark:text-white">
                        Reset password
                    </h2>
                </template>

                <UForm
                    ref="form"
                    :state="form"
                    class="space-y-6"
                    @submit.prevent="submit"
                >
                    <UFormField
                        label="Email"
                        required
                        name="email"
                    >
                        <UInput
                            v-model="form.email"
                            type="email"
                            class="w-full"
                            required
                            autofocus
                        />
                    </UFormField>

                    <UFormField
                        label="Password"
                        required
                        name="password"
                    >
                        <UInput
                            v-model="form.password"
                            type="password"
                            class="w-full"
                            required
                            autocomplete="new-password"
                        />
                    </UFormField>

                    <UFormField
                        label="Confirm Password"
                        required
                        name="password_confirmation"
                    >
                        <UInput
                            v-model="form.password_confirmation"
                            type="password"
                            class="w-full"
                            required
                            autocomplete="new-password"
                        />
                    </UFormField>

                    <div class="flex justify-end">
                        <UButton
                            type="submit"
                            :loading="form.processing"
                        >
                            Reset Password
                        </UButton>
                    </div>
                </UForm>
            </UCard>
        </div>
    </AppLayout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        email: String,
        token: String,
    },

    data() {
        return {
            form: this.$inertia.form({
                token: this.token,
                email: this.email,
                password: '',
                password_confirmation: '',
            })
        }
    },

    methods: {
        submit() {
            this.form.post(this.route('password.update'), {
                onFinish: () => this.form.reset('password', 'password_confirmation'),
            })
        }
    }
})
</script>

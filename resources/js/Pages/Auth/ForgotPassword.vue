<template>
    <AppLayout title="Forgot Password">
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
                        Forgot password
                    </h2>
                </template>

                <UForm
                    ref="form"
                    :state="form"
                    class="space-y-6"
                    @submit.prevent="submit"
                >
                    <UAlert
                        color="neutral"
                        variant="subtle"
                        description="Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."
                    />

                    <div
                        v-if="status"
                        class="p-3 text-sm text-green-700 bg-green-50 dark:bg-green-900/40 dark:text-green-100 rounded"
                    >
                        {{ status }}
                    </div>
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
                            placeholder="aragon@lotro.com"
                        />
                    </UFormField>

                    <div class="flex justify-end">
                        <UButton
                            type="submit"
                            :loading="form.processing"
                        >
                            Email Password Reset Link
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
        status: String
    },

    data () {
        return {
            form: this.$inertia.form({
                email: ''
            })
        }
    },

    methods: {
        submit () {
            this.form.post(this.route('password.email'))
        }
    }
})
</script>

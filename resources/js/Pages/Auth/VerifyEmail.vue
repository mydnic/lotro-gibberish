<template>
    <AppLayout title="Email Verification">
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
                        Verify your email
                    </h2>
                </template>

                <p class="text-sm text-gray-600 dark:text-gray-300">
                    Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.
                </p>

                <div
                    v-if="verificationLinkSent"
                    class="p-3 text-sm text-green-700 bg-green-50 dark:bg-green-900/40 dark:text-green-100 rounded"
                >
                    A new verification link has been sent to the email address you provided during registration.
                </div>

                <UForm
                    ref="form"
                    :state="form"
                    class="space-y-6"
                    @submit.prevent="submit"
                >
                    <div class="flex items-center justify-between">
                        <UButton
                            type="submit"
                            :loading="form.processing"
                        >
                            Resend Verification Email
                        </UButton>

                        <UButton
                            :href="route('logout')"
                            method="post"
                            as="button"
                            variant="link"
                            size="xs"
                        >
                            Log Out
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

    data() {
        return {
            form: this.$inertia.form()
        }
    },

    methods: {
        submit() {
            this.form.post(this.route('verification.send'))
        },
    },

    computed: {
        verificationLinkSent() {
            return this.status === 'verification-link-sent'
        }
    }
})
</script>

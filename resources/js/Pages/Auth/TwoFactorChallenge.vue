<template>
    <AppLayout title="Two-factor Confirmation">
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
                        Two-factor confirmation
                    </h2>
                </template>

                <p class="text-sm text-gray-600 dark:text-gray-300">
                    <template v-if="!recovery">
                        Please confirm access to your account by entering the authentication code provided by your authenticator application.
                    </template>
                    <template v-else>
                        Please confirm access to your account by entering one of your emergency recovery codes.
                    </template>
                </p>

                <UForm
                    ref="form"
                    :state="form"
                    class="space-y-6"
                    @submit.prevent="submit"
                >
                    <UFormField
                        v-if="!recovery"
                        label="Code"
                        required
                        name="code"
                    >
                        <UInput
                            ref="code"
                            v-model="form.code"
                            type="text"
                            inputmode="numeric"
                            class="w-full"
                            required
                            autocomplete="one-time-code"
                            autofocus
                        />
                    </UFormField>

                    <UFormField
                        v-else
                        label="Recovery Code"
                        required
                        name="recovery_code"
                    >
                        <UInput
                            ref="recovery_code"
                            v-model="form.recovery_code"
                            type="text"
                            class="w-full"
                            required
                            autocomplete="one-time-code"
                        />
                    </UFormField>

                    <div class="flex items-center justify-between">
                        <UButton
                            variant="link"
                            size="xs"
                            @click.prevent="toggleRecovery"
                        >
                            <template v-if="!recovery">
                                Use a recovery code
                            </template>
                            <template v-else>
                                Use an authentication code
                            </template>
                        </UButton>

                        <UButton
                            type="submit"
                            :loading="form.processing"
                        >
                            Log in
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
    data() {
        return {
            recovery: false,
            form: this.$inertia.form({
                code: '',
                recovery_code: '',
            })
        }
    },

    methods: {
        toggleRecovery() {
            this.recovery ^= true

            this.$nextTick(() => {
                if (this.recovery) {
                    this.$refs.recovery_code.focus()
                    this.form.code = ''
                } else {
                    this.$refs.code.focus()
                    this.form.recovery_code = ''
                }
            })
        },

        submit() {
            this.form.post(this.route('two-factor.login'))
        }
    }
})
</script>

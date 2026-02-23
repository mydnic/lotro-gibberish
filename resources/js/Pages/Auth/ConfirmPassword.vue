<template>
    <AppLayout title="Confirm Password">
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
                        Confirm password
                    </h2>
                </template>

                <p class="text-sm text-gray-600 dark:text-gray-300">
                    This is a secure area of the application. Please confirm your password before continuing.
                </p>

                <UForm
                    ref="form"
                    :state="form"
                    class="space-y-6"
                    @submit.prevent="submit"
                >
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
                            autocomplete="current-password"
                            autofocus
                        />
                    </UFormField>

                    <div class="flex justify-end">
                        <UButton
                            type="submit"
                            :loading="form.processing"
                        >
                            Confirm
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
            form: this.$inertia.form({
                password: '',
            })
        }
    },

    methods: {
        submit() {
            this.form.post(this.route('password.confirm'), {
                onFinish: () => this.form.reset(),
            })
        }
    }
})
</script>

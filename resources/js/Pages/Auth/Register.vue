<template>
    <AppLayout title="Register">
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
                        Create an account
                    </h2>
                </template>

                <UForm
                    ref="form"
                    :state="form"
                    class="space-y-6"
                    @submit.prevent="submit"
                >
                    <UFormField
                        label="Username"
                        required
                        name="username"
                    >
                        <UInput
                            v-model="form.username"
                            type="text"
                            class="w-full"
                            required
                            autofocus
                            placeholder="Aragorn"
                        />
                    </UFormField>

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
                            placeholder="aragon@lotro.com"
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

                    <div class="flex justify-end mt-6">
                        <UButton
                            type="submit"
                            :loading="form.processing"
                        >
                            Register
                        </UButton>
                    </div>
                </UForm>
            </UCard>

            <p class="text-xs">
                Already have an account?
                <UButton
                    variant="link"
                    size="xs"
                    :href="route('login')"
                >
                    Log in
                </UButton>
            </p>
        </div>
    </AppLayout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        errors: Object
    },

    data () {
        return {
            form: this.$inertia.form({
                username: '',
                email: '',
                password: '',
                password_confirmation: '',
                terms: false
            })
        }
    },

    methods: {
        submit () {
            this.form.post(this.route('register'), {
                onFinish: () => this.form.reset('password', 'password_confirmation'),
                onError: (errors) => {
                    this.$refs.form.setErrors(Object.keys(errors).map(key => ({
                        name: key,
                        message: errors[key]
                    })))
                }
            })
        }
    }
})
</script>

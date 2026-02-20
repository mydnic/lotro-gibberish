<template>
    <AppLayout title="Login">
        <div class="h-[80vh] space-y-10 flex flex-col items-center justify-center">
            <img
                :src="'/logo/icon.svg'"
                alt="Icon"
            >

            <UCard class="md:w-1/2 w-full">
                <template #header>
                    <h2 class="text-lg font-medium text-gray-900 dark:text-white">
                        Log in
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
                            autofocus
                        />
                    </UFormField>

                    <UFormField>
                        <UCheckbox
                            v-model="form.remember"
                            name="remember"
                            label="Remember me"
                        />
                    </UFormField>

                    <div class="flex justify-between">
                        <UButton
                            :href="route('password.request')"
                            variant="link"
                        >
                            Forgot your password?
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

            <p class="text-xs">
                Don't have an account? <UButton
                    variant="link"
                    size="xs"
                    href="{{ route('register') }}"
                >
                    Register
                </UButton>
            </p>

            {{ form }}
        </div>
    </AppLayout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({

    props: {
        canResetPassword: Boolean,
        status: String
    },

    data () {
        return {
            form: this.$inertia.form({
                email: '',
                password: '',
                remember: false
            })
        }
    },

    methods: {
        submit () {
            this.form
                .transform(data => ({
                    ...data,
                    remember: this.form.remember ? 'on' : ''
                }))
                .post(this.route('login'), {
                    onFinish: () => this.form.reset('password'),
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

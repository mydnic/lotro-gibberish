<template>
    <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
            <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">Two Factor Authentication</h3>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">Add additional security to your account using two factor authentication.</p>
        </div>

        <div class="mt-5 md:mt-0 md:col-span-2">
            <UCard>
                <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100" v-if="twoFactorEnabled">
                    You have enabled two factor authentication.
                </h3>
                <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100" v-else>
                    You have not enabled two factor authentication.
                </h3>

                <div class="max-w-xl mt-3 text-sm text-gray-600 dark:text-gray-300">
                    <p>
                        When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application.
                    </p>
                </div>

                <div v-if="twoFactorEnabled">
                    <div v-if="qrCode">
                        <div class="max-w-xl mt-4 text-sm text-gray-600 dark:text-gray-300">
                            <p class="font-semibold">
                                Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application.
                            </p>
                        </div>

                        <div class="mt-4" v-html="qrCode"></div>
                    </div>

                    <div v-if="recoveryCodes.length > 0">
                        <div class="max-w-xl mt-4 text-sm text-gray-600 dark:text-gray-300">
                            <p class="font-semibold">
                                Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost.
                            </p>
                        </div>

                        <div class="grid max-w-xl gap-1 px-4 py-4 mt-4 font-mono text-sm bg-gray-100 rounded-lg">
                            <div v-for="code in recoveryCodes" :key="code">
                                {{ code }}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-5 flex gap-3">
                    <div v-if="!twoFactorEnabled">
                        <UButton type="button" :loading="enabling" :disabled="enabling" @click="confirmAction('enable')">
                            Enable
                        </UButton>
                    </div>

                    <div v-else class="flex gap-3">
                        <UButton variant="outline" color="neutral" v-if="recoveryCodes.length > 0" @click="confirmAction('regenerate')">
                            Regenerate Recovery Codes
                        </UButton>

                        <UButton variant="outline" color="neutral" v-if="recoveryCodes.length === 0" @click="confirmAction('show')">
                            Show Recovery Codes
                        </UButton>

                        <UButton color="error" :loading="disabling" :disabled="disabling" @click="confirmAction('disable')">
                            Disable
                        </UButton>
                    </div>
                </div>
            </UCard>
        </div>
    </div>

    <!-- Password Confirmation Modal -->
    <UModal v-model:open="confirmingPassword" title="Confirm Password" description="For your security, please confirm your password to continue.">
        <template #body>
            <UFormField label="Password" :error="confirmPasswordError">
                <UInput
                    v-model="confirmPasswordValue"
                    type="password"
                    class="w-full"
                    @keyup.enter="submitConfirmPassword"
                />
            </UFormField>
        </template>

        <template #footer>
            <div class="flex justify-end gap-3">
                <UButton variant="outline" color="neutral" @click="confirmingPassword = false">
                    Cancel
                </UButton>
                <UButton :loading="confirmPasswordProcessing" @click="submitConfirmPassword">
                    Confirm
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
            enabling: false,
            disabling: false,

            qrCode: null,
            recoveryCodes: [],

            confirmingPassword: false,
            confirmPasswordValue: '',
            confirmPasswordError: '',
            confirmPasswordProcessing: false,
            pendingAction: null,
        }
    },

    methods: {
        confirmAction(action) {
            this.pendingAction = action
            this.confirmPasswordValue = ''
            this.confirmPasswordError = ''
            this.confirmingPassword = true
        },

        submitConfirmPassword() {
            this.confirmPasswordProcessing = true

            axios.post('/user/confirm-password', { password: this.confirmPasswordValue })
                .then(() => {
                    this.confirmPasswordProcessing = false
                    this.confirmingPassword = false
                    this.executeAction(this.pendingAction)
                })
                .catch(error => {
                    this.confirmPasswordProcessing = false
                    this.confirmPasswordError = error.response.data.errors.password[0]
                })
        },

        executeAction(action) {
            if (action === 'enable') {
                this.enableTwoFactorAuthentication()
            } else if (action === 'regenerate') {
                this.regenerateRecoveryCodes()
            } else if (action === 'show') {
                this.showRecoveryCodes()
            } else if (action === 'disable') {
                this.disableTwoFactorAuthentication()
            }
        },

        enableTwoFactorAuthentication() {
            this.enabling = true

            this.$inertia.post('/user/two-factor-authentication', {}, {
                preserveScroll: true,
                onSuccess: () => Promise.all([
                    this.showQrCode(),
                    this.showRecoveryCodes(),
                ]),
                onFinish: () => (this.enabling = false),
            })
        },

        showQrCode() {
            return axios.get('/user/two-factor-qr-code')
                .then(response => {
                    this.qrCode = response.data.svg
                })
        },

        showRecoveryCodes() {
            return axios.get('/user/two-factor-recovery-codes')
                .then(response => {
                    this.recoveryCodes = response.data
                })
        },

        regenerateRecoveryCodes() {
            axios.post('/user/two-factor-recovery-codes')
                .then(() => {
                    this.showRecoveryCodes()
                })
        },

        disableTwoFactorAuthentication() {
            this.disabling = true

            this.$inertia.delete('/user/two-factor-authentication', {
                preserveScroll: true,
                onSuccess: () => (this.disabling = false),
            })
        },
    },

    computed: {
        twoFactorEnabled() {
            return !this.enabling && this.$page.props.user.two_factor_enabled
        }
    }
})
</script>

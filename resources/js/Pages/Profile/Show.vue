<template>
    <AppLayout title="Profile">
        <div class="space-y-10">
            <div>
                <UpdateProfileInformationForm :user="$page.props.user" />
                <USeparator class="mt-10" />
            </div>

            <div>
                <UpdatePasswordForm />
                <USeparator class="mt-10" />
            </div>

            <LogoutOtherBrowserSessionsForm :sessions="sessions" />

            <template>
                <USeparator />
                <DeleteUserForm />
            </template>
        </div>
    </AppLayout>
</template>

<script>
import { defineComponent } from 'vue'
import AppLayout from '@/Layouts/AppLayout.vue'
import DeleteUserForm from '@/Pages/Profile/Partials/DeleteUserForm.vue'
import LogoutOtherBrowserSessionsForm from '@/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue'
import UpdatePasswordForm from '@/Pages/Profile/Partials/UpdatePasswordForm.vue'
import UpdateProfileInformationForm from '@/Pages/Profile/Partials/UpdateProfileInformationForm.vue'

export default defineComponent({

    components: {
        AppLayout,
        DeleteUserForm,
        LogoutOtherBrowserSessionsForm,
        UpdatePasswordForm,
        UpdateProfileInformationForm
    },
    props: ['sessions']
})
</script>

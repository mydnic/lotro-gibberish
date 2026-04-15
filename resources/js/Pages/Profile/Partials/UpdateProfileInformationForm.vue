<template>
    <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
            <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">Profile Information</h3>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">Update your account's profile information and email address.</p>
        </div>

        <div class="mt-5 md:mt-0 md:col-span-2">
            <UCard>
                <form @submit.prevent="updateProfileInformation">
                    <div class="space-y-4">
                        <!-- Profile Photo -->
                        <div v-if="$page.props.jetstream.managesProfilePhotos">
                            <input type="file" class="hidden" ref="photo" @change="updatePhotoPreview">

                            <UFormField label="Photo" :error="form.errors.photo">
                                <div class="mt-2" v-show="!photoPreview">
                                    <img :src="user.profile_photo_url" :alt="user.name" class="object-cover w-20 h-20 rounded-full">
                                </div>

                                <div class="mt-2" v-show="photoPreview">
                                    <span class="block w-20 h-20 bg-center bg-no-repeat bg-cover rounded-full"
                                          :style="'background-image: url(\'' + photoPreview + '\');'">
                                    </span>
                                </div>

                                <div class="mt-2 flex gap-2">
                                    <UButton variant="outline" color="neutral" type="button" @click.prevent="selectNewPhoto">
                                        Select A New Photo
                                    </UButton>
                                    <UButton variant="outline" color="neutral" type="button" @click.prevent="deletePhoto" v-if="user.profile_photo_path">
                                        Remove Photo
                                    </UButton>
                                </div>
                            </UFormField>
                        </div>

                        <!-- Username -->
                        <UFormField label="Username" :error="form.errors.username">
                            <UInput id="username" type="text" class="w-full" v-model="form.username" autocomplete="username" />
                        </UFormField>

                        <!-- Email -->
                        <UFormField label="Email" :error="form.errors.email">
                            <UInput id="email" type="email" class="w-full" v-model="form.email" />
                        </UFormField>

                        <!-- Support Link -->
                        <UFormField
                            label="Support Link (optional)"
                            :error="form.errors.support_link"
                            hint="Add your Ko-fi, PayPal.me, or other donation link so users can support your work"
                        >
                            <UInput
                                id="support_link"
                                type="url"
                                class="w-full"
                                v-model="form.support_link"
                                placeholder="https://ko-fi.com/yourname or https://paypal.me/yourname"
                            />
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
    props: ['user'],

    data() {
        return {
            form: this.$inertia.form({
                _method: 'PUT',
                username: this.user.username,
                email: this.user.email,
                support_link: this.user.support_link || '',
                photo: null,
            }),
            photoPreview: null,
        }
    },

    methods: {
        updateProfileInformation() {
            if (this.$refs.photo) {
                this.form.photo = this.$refs.photo.files[0]
            }

            this.form.post(route('user-profile-information.update'), {
                errorBag: 'updateProfileInformation',
                preserveScroll: true,
                onSuccess: () => (this.clearPhotoFileInput()),
            });
        },

        selectNewPhoto() {
            this.$refs.photo.click();
        },

        updatePhotoPreview() {
            const photo = this.$refs.photo.files[0];

            if (!photo) return;

            const reader = new FileReader();

            reader.onload = (e) => {
                this.photoPreview = e.target.result;
            };

            reader.readAsDataURL(photo);
        },

        deletePhoto() {
            this.$inertia.delete(route('current-user-photo.destroy'), {
                preserveScroll: true,
                onSuccess: () => {
                    this.photoPreview = null;
                    this.clearPhotoFileInput();
                },
            });
        },

        clearPhotoFileInput() {
            if (this.$refs.photo?.value) {
                this.$refs.photo.value = null;
            }
        },
    },
})
</script>

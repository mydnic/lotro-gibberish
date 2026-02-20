<template>
    <UApp>
        <Head :title="title" />

        <UHeader>
            <template #title>
                <Link :href="route('home')">
                    <img
                        :src="'/logo/logo-large.svg'"
                        alt="logo"
                        class="block w-auto h-10 dark:hidden"
                    >
                    <img
                        :src="'/logo/logo-larger_white.svg'"
                        alt="logo"
                        class="hidden w-auto h-10 dark:block"
                    >
                </Link>
            </template>

            <UNavigationMenu
                :items="[
                    [
                        {
                            label: 'All Configs',
                            href: route('home')
                        }
                    ]
                ]"
            />

            <template #right>
                <UDropdownMenu
                    v-if="$page.props.user"
                    :items="[
                        [
                            {
                                label: 'Profile',
                                icon: 'lucide:user',
                                href: route('profile.show')
                            },
                            {
                                label: 'My Configs',
                                icon: 'lucide:list',
                                href: route('user.configuration.index')
                            },
                            {
                                label: 'Post New Config',
                                icon: 'lucide:plus',
                                href: route('user.configuration.create')
                            }
                        ],
                        [
                            {
                                label: 'Log out',
                                icon: 'lucide:log-out',
                                onSelect: () => $inertia.post(route('logout'))
                            }
                        ]
                    ]"
                >
                    <UButton>
                        {{ $page.props.user.username }}
                    </UButton>
                </UDropdownMenu>
                <UNavigationMenu
                    v-else
                    :items="[
                        [
                            {
                                label: 'Login',
                                href: route('login')
                            },
                            {
                                label: 'Register',
                                href: route('register')
                            }
                        ]
                    ]"
                />
                <UColorModeButton />
            </template>
        </UHeader>

        <UContainer>
            <slot />
        </UContainer>

        <footer>
            <AppFooter />
        </footer>
    </UApp>
</template>

<script>
import { defineComponent } from 'vue'
import AppFooter from '../Partials/AppFooter.vue'

export default defineComponent({
    components: { AppFooter },
    props: {
        title: String
    }
})
</script>

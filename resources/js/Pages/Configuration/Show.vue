<template>
    <AppLayout :title="configuration.title">
        <!-- Back + title row -->
        <div class="flex items-end justify-between gap-4 mb-8">
            <div class="flex-1 min-w-0">
                <Link
                    :href="route('home')"
                    class="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary mb-2"
                >
                    <UIcon
                        name="lucide:arrow-left"
                        class="size-4"
                    />
                    All Configs
                </Link>
                <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
                    {{ configuration.title }}
                </h1>
            </div>

            <UButton
                :icon="liked ? 'lucide:star' : 'lucide:star'"
                :color="liked ? 'warning' : 'neutral'"
                :variant="liked ? 'solid' : 'outline'"
                class="shrink-0"
                @click="$inertia.post(route('configuration.like', configuration.uuid))"
            >
                {{ liked ? 'Starred' : 'Star' }}
                <UBadge
                    :label="String(configuration.like_counter?.count || 0)"
                    color="neutral"
                    variant="solid"
                    size="sm"
                    class="ml-1"
                />
            </UButton>
        </div>

        <!-- Meta card -->
        <UCard
            class="mb-6"
            variant="soft"
        >
            <div class="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-600 dark:text-gray-400">
                <span class="flex items-center gap-1.5">
                    <img
                        v-if="configuration.category.icon_path"
                        :src="'/icons/' + configuration.category.icon_path"
                        :alt="configuration.category.title"
                        class="size-4"
                    >
                    <UIcon
                        v-else
                        name="lucide:tag"
                        class="size-4"
                    />
                    {{ configuration.category.title }}
                </span>

                <UBadge
                    :color="configuration.version === 'v3' ? 'success' : 'warning'"
                    variant="subtle"
                >
                    Gibberish {{ configuration.version }}
                </UBadge>

                <UBadge
                    color="neutral"
                    variant="outline"
                    class="uppercase"
                >
                    {{ configuration.language }}
                </UBadge>

                <UUser
                    :name="configuration.user.username"
                    :avatar="{ alt: configuration.user.username }"
                    size="sm"
                />
                <div class="grow" />
                <span class="flex items-center gap-1.5">
                    <UIcon
                        name="lucide:calendar"
                        class="size-4"
                    />
                    {{ formatDate(configuration.updated_at) }}
                </span>

                <span class="flex items-center gap-1.5">
                    <UIcon
                        name="lucide:refresh-cw"
                        class="size-4"
                    />
                    Updated {{ configuration.updated_count }} times
                </span>
            </div>
        </UCard>

        <!-- Description -->
        <UCard
            v-if="configuration.formatted_description"
            class="mb-6"
            variant="soft"
        >
            <div
                class="prose max-w-none dark:prose-invert whitespace-pre-line"
                v-html="configuration.formatted_description"
            />
        </UCard>

        <!-- Code block -->
        <UCard variant="soft">
            <template #header>
                <div class="flex items-center justify-between">
                    <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Configuration Code
                    </span>
                    <UButton
                        :icon="copied ? 'lucide:check' : 'lucide:copy'"
                        :color="copied ? 'success' : 'neutral'"
                        variant="ghost"
                        size="sm"
                        @click="copy"
                    >
                        {{ copied ? 'Copied!' : 'Copy' }}
                    </UButton>
                </div>
            </template>
            <pre
                class="overflow-auto text-sm font-mono text-gray-800 dark:text-gray-200 whitespace-pre-wrap"
                v-text="configuration.code"
            />
        </UCard>
    </AppLayout>
</template>

<script>
import { defineComponent } from 'vue'
import dayjs from 'dayjs'
import { Link } from '@inertiajs/vue3'
import useClipboard from 'vue-clipboard3'

const { toClipboard } = useClipboard()

export default defineComponent({
    components: { Link },

    props: ['configuration', 'liked'],

    data () {
        return {
            copied: false
        }
    },

    methods: {
        formatDate (dateString) {
            return dayjs(dateString).format('DD/MM/YYYY')
        },

        async copy () {
            try {
                await toClipboard(this.configuration.code)
                this.copied = true
                setTimeout(() => { this.copied = false }, 2000)
            } catch (e) {
                console.error(e)
            }
        }
    }
})
</script>

<template>
    <AppLayout title="Top Creators">
        <div class="mb-8">
            <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Top Creators
            </h1>
            <p class="text-gray-600 dark:text-gray-400">
                The most active community members sharing their LOTRO Gibberish configurations.
                Support their work!
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
                v-for="(creator, index) in creators"
                :key="creator.id"
                :href="route('creators.show', creator.username)"
                class="block"
            >
                <UCard
                    variant="soft"
                    class="hover:ring-2 hover:ring-primary transition-all"
                >
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex items-center gap-3">
                            <div
                                v-if="index < 3"
                                class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
                                :class="{
                                    'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300': index === 0,
                                    'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300': index === 1,
                                    'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300': index === 2
                                }"
                            >
                                {{ index + 1 }}
                            </div>
                            <UUser
                                :name="creator.username"
                                :avatar="{ alt: creator.username }"
                                size="md"
                            />
                        </div>

                        <UButton
                            v-if="creator.support_link"
                            :href="creator.support_link"
                            target="_blank"
                            variant="outline"
                            color="neutral"
                            size="sm"
                            class="ring-2 ring-gradient-to-r ring-pink-500"
                            rel="noopener noreferrer"
                            icon="lucide:heart"
                            @click.stop
                        >
                            Support
                        </UButton>
                    </div>

                    <div class="grid grid-cols-2 gap-4 mb-4">
                        <div class="text-center p-3 bg-white dark:bg-zinc-800 rounded-lg">
                            <div class="text-2xl font-bold text-gray-900 dark:text-white">
                                {{ creator.configurations_count }}
                            </div>
                            <div class="text-xs text-gray-500 dark:text-gray-400">
                                Configs
                            </div>
                        </div>
                        <div class="text-center p-3 bg-white dark:bg-zinc-800 rounded-lg">
                            <div class="text-2xl font-bold text-yellow-600 dark:text-yellow-500 flex items-center justify-center gap-1">
                                <UIcon
                                    name="lucide:star"
                                    class="size-5"
                                />
                                {{ creator.total_stars }}
                            </div>
                            <div class="text-xs text-gray-500 dark:text-gray-400">
                                Total Stars
                            </div>
                        </div>
                    </div>
                </UCard>
            </Link>
        </div>

        <UCard
            v-if="creators.length === 0"
            variant="soft"
            class="text-center py-12"
        >
            <UIcon
                name="lucide:users"
                class="size-12 text-gray-400 mx-auto mb-4"
            />
            <p class="text-gray-600 dark:text-gray-400">
                No creators found yet.
            </p>
        </UCard>
    </AppLayout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: ['creators']
})
</script>

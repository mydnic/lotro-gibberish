<flux:main>
    <flux:header>
        <flux:heading level="1">Latest Configs</flux:heading>
    </flux:header>

    <div class="py-12">
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <form wire:submit.prevent class="space-y-4">
                <div class="flex flex-wrap items-center gap-4">
                    <div class="relative grow max-w-md">
                        <flux:input 
                            wire:model.live="search" 
                            placeholder="Search..." 
                            type="search"
                            icon="magnifying-glass"
                        />
                    </div>

                    <flux:select wire:model.live="version" placeholder="Plugin Version">
                        <option :value="null">Plugin Version</option>
                        <option value="v2">Gibberish v2</option>
                        <option value="v3">Gibberish v3</option>
                    </flux:select>

                    <flux:select wire:model.live="language" placeholder="All Languages">
                        <option :value="null">All Languages</option>
                        <option value="fr">FR</option>
                        <option value="de">DE</option>
                        <option value="en">EN</option>
                    </flux:select>

                    <flux:dropdown align="right" width="60">
                        <flux:trigger class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition bg-white border border-transparent rounded-md hover:bg-gray-50 hover:text-gray-700">
                            Categories
                            @if(count($selectedCategories))
                                ({{ count($selectedCategories) }})
                            @endif
                            <flux:icon.chevron-down class="ml-2 -mr-0.5 h-4 w-4" />
                        </flux:trigger>

                        <flux:content>
                            <div class="w-56 px-4 py-2 space-y-2 overflow-auto text-sm max-h-96">
                                @foreach($categories as $category)
                                    <label class="flex items-center">
                                        <flux:checkbox 
                                            :value="$category->id" 
                                            wire:model.live="selectedCategories" 
                                        />
                                        <div class="ml-2 uppercase">
                                            {{ $category->title }}
                                        </div>
                                    </label>
                                @endforeach
                            </div>
                        </flux:content>
                    </flux:dropdown>

                    <flux:button type="submit" variant="primary">
                        Search
                    </flux:button>

                    <flux:button wire:click="clearFilters" variant="ghost">
                        Clear filters
                    </flux:button>
                </div>
            </form>

            <div class="grid grid-cols-1 gap-4 mt-8">
                @foreach($configurations as $config)
                    @include('partials.config-card', ['config' => $config])
                @endforeach
            </div>

            <div class="mt-8">
                {{ $configurations->links() }}
            </div>

            @if($configurations->isEmpty())
                <div class="text-center mt-8">
                    <flux:icon.document-magnifying-glass class="w-12 h-12 mx-auto text-gray-400" />
                    <h3 class="mt-2 text-sm font-medium text-gray-900">Nothing found.</h3>
                    <p class="mt-1 text-sm text-gray-500">No configs match your search criteria.</p>
                </div>
            @endif
        </div>
    </div>
</flux:main>

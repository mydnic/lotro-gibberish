<div class="overflow-hidden bg-white rounded-lg shadow dark:bg-gray-800">
    <div class="p-6">
        <div class="flex items-center justify-between">
            <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    {{ $config->title }}
                </h3>
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {{ $config->description }}
                </p>
            </div>
            @if($config->is_liked)
                <flux:button icon="heart" variant="filled" class="text-red-500" />
            @else
                <flux:button icon="heart" variant="ghost" />
            @endif
        </div>
        
        <div class="flex items-center gap-4 mt-4">
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                {{ strtoupper($config->language) }}
            </span>
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                {{ $config->version }}
            </span>
            @foreach($config->categories as $category)
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    {{ $category->title }}
                </span>
            @endforeach
        </div>

        <div class="flex items-center justify-between mt-4">
            <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <flux:icon.user class="w-4 h-4 mr-1" />
                {{ $config->user->name }}
                <span class="mx-2">•</span>
                <flux:icon.calendar class="w-4 h-4 mr-1" />
                {{ $config->created_at->diffForHumans() }}
            </div>
            
            <div class="flex items-center gap-2">
                <flux:button href="{{ route('configurations.show', $config) }}" variant="secondary" size="sm">
                    View Details
                </flux:button>
            </div>
        </div>
    </div>
</div>

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Lotro Gibberish') }}</title>

    @fluxStyles
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="font-sans antialiased">
    <flux:main>
        <flux:navbar>
            <flux:brand href="/">Lotro Gibberish</flux:brand>
            <flux:spacer />
            <form method="POST" action="{{ route('logout') }}">
                @csrf
                <flux:button type="submit" variant="ghost">{{ __('Log out') }}</flux:button>
            </form>
        </flux:navbar>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <flux:heading level="1" size="2xl">Dashboard</flux:heading>
                <flux:text class="mt-2">Welcome to your dashboard!</flux:text>

                <div class="mt-8">
                    <flux:button :href="route('configuration.index')" variant="primary">
                        Browse Configurations
                    </flux:button>
                </div>
            </div>
        </div>
    </flux:main>

    @fluxScripts
</body>
</html>

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
            @auth
                <flux:button :href="route('configuration.index')" variant="ghost">Dashboard</flux:button>
                <form method="POST" action="{{ route('logout') }}">
                    @csrf
                    <flux:button type="submit" variant="ghost">{{ __('Log out') }}</flux:button>
                </form>
            @else
                <flux:button :href="route('login')" variant="ghost">Log in</flux:button>
                <flux:button :href="route('register')" variant="primary">Register</flux:button>
            @endauth
        </flux:navbar>

        <div class="py-20 text-center">
            <flux:heading level="1" size="4xl">Lotro Gibberish</flux:heading>
            <flux:text class="mt-4 text-lg text-gray-600 dark:text-gray-400">
                The ultimate configuration manager for LotRO plugins
            </flux:text>
            
            <div class="mt-8 flex justify-center gap-4">
                <flux:button :href="route('register')" variant="primary" size="lg">
                    {{ __('Get Started') }}
                </flux:button>
                <flux:button :href="route('login')" variant="secondary" size="lg">
                    {{ __('Log in') }}
                </flux:button>
            </div>
        </div>
    </flux:main>

    @fluxScripts
</body>
</html>

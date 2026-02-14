<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ __('Confirm Password') }} - {{ config('app.name', 'Lotro Gibberish') }}</title>

    @fluxStyles
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="font-sans antialiased">
    <flux:main class="min-h-screen flex flex-col items-center pt-6 sm:justify-center sm:pt-0">
        <flux:brand href="/" class="mb-6">Lotro Gibberish</flux:brand>

        <flux:card class="w-full sm:max-w-md">
            <flux:heading level="2" class="mb-6 text-center">{{ __('Confirm your password') }}</flux:heading>
            <flux:text class="mb-6 text-center text-sm text-gray-600 dark:text-gray-400">
                {{ __('This is a secure area of the application. Please confirm your password before continuing.') }}
            </flux:text>

            <form method="POST" action="{{ route('password.confirm') }}">
                @csrf

                <flux:field>
                    <flux:label>{{ __('Password') }}</flux:label>
                    <flux:input name="password" type="password" required autocomplete="new-password" />
                    @error('password')
                        <flux:error>{{ $message }}</flux:error>
                    @enderror
                </flux:field>

                <flux:button type="submit" variant="primary" class="w-full mt-6">
                    {{ __('Confirm') }}
                </flux:button>
            </form>
        </flux:card>
    </flux:main>

    @fluxScripts
</body>
</html>

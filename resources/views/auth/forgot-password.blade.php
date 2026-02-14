<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ __('Forgot Password') }} - {{ config('app.name', 'Lotro Gibberish') }}</title>

    @fluxStyles
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="font-sans antialiased">
    <flux:main class="min-h-screen flex flex-col items-center pt-6 sm:justify-center sm:pt-0">
        <flux:brand href="/" class="mb-6">Lotro Gibberish</flux:brand>

        <flux:card class="w-full sm:max-w-md">
            <flux:heading level="2" class="mb-6 text-center">{{ __('Forgot your password?') }}</flux:heading>
            <flux:text class="mb-6 text-center text-sm text-gray-600 dark:text-gray-400">
                {{ __('Enter your email address and we\'ll send you a password reset link.') }}
            </flux:text>

            @if (session('status'))
                <flux:alert variant="success" class="mb-4">{{ session('status') }}</flux:alert>
            @endif

            <form method="POST" action="{{ route('password.email') }}">
                @csrf

                <flux:field>
                    <flux:label>{{ __('Email') }}</flux:label>
                    <flux:input name="email" type="email" :value="old('email')" required autofocus />
                    @error('email')
                        <flux:error>{{ $message }}</flux:error>
                    @enderror
                </flux:field>

                <flux:button type="submit" variant="primary" class="w-full mt-6">
                    {{ __('Send Password Reset Link') }}
                </flux:button>
            </form>

            <div class="mt-6 text-center text-sm">
                <flux:link :href="route('login')">{{ __('Back to login') }}</flux:link>
            </div>
        </flux:card>
    </flux:main>

    @fluxScripts
</body>
</html>

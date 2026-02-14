<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ __('Login') }} - {{ config('app.name', 'Lotro Gibberish') }}</title>

    @fluxStyles
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="font-sans antialiased">
    <flux:main class="min-h-screen flex flex-col items-center pt-6 sm:justify-center sm:pt-0">
        <flux:brand href="/" class="mb-6">Lotro Gibberish</flux:brand>

        <flux:card class="w-full sm:max-w-md">
            <flux:heading level="2" class="mb-6 text-center">{{ __('Sign in to your account') }}</flux:heading>

            @if (session('status'))
                <flux:alert variant="success" class="mb-4">{{ session('status') }}</flux:alert>
            @endif

            <form method="POST" action="{{ route('login') }}">
                @csrf

                <flux:field>
                    <flux:label>{{ __('Email') }}</flux:label>
                    <flux:input name="email" type="email" :value="old('email')" required autofocus />
                    @error('email')
                        <flux:error>{{ $message }}</flux:error>
                    @enderror
                </flux:field>

                <flux:field class="mt-4">
                    <div class="flex items-center justify-between">
                        <flux:label>{{ __('Password') }}</flux:label>
                        @if (Route::has('password.request'))
                            <flux:link :href="route('password.request')" class="text-sm">{{ __('Forgot your password?') }}</flux:link>
                        @endif
                    </div>
                    <flux:input name="password" type="password" required autocomplete="current-password" />
                    @error('password')
                        <flux:error>{{ $message }}</flux:error>
                    @enderror
                </flux:field>

                <flux:checkbox name="remember" :label="__('Remember me')" class="mt-4" />

                <flux:button type="submit" variant="primary" class="w-full mt-6">
                    {{ __('Sign in') }}
                </flux:button>
            </form>

            @if (Route::has('register'))
                <div class="mt-6 text-center text-sm">
                    <flux:link :href="route('register')">{{ __('Don\'t have an account?') }}</flux:link>
                </div>
            @endif
        </flux:card>
    </flux:main>

    @fluxScripts
</body>
</html>

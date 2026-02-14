<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ __('Register') }} - {{ config('app.name', 'Lotro Gibberish') }}</title>

    @fluxStyles
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="font-sans antialiased">
    <flux:main class="min-h-screen flex flex-col items-center pt-6 sm:justify-center sm:pt-0">
        <flux:brand href="/" class="mb-6">Lotro Gibberish</flux:brand>

        <flux:card class="w-full sm:max-w-md">
            <flux:heading level="2" class="mb-6 text-center">{{ __('Create your account') }}</flux:heading>

            <form method="POST" action="{{ route('register') }}">
                @csrf

                <flux:field>
                    <flux:label>{{ __('Name') }}</flux:label>
                    <flux:input name="name" type="text" :value="old('name')" required autofocus />
                    @error('name')
                        <flux:error>{{ $message }}</flux:error>
                    @enderror
                </flux:field>

                <flux:field class="mt-4">
                    <flux:label>{{ __('Email') }}</flux:label>
                    <flux:input name="email" type="email" :value="old('email')" required />
                    @error('email')
                        <flux:error>{{ $message }}</flux:error>
                    @enderror
                </flux:field>

                <flux:field class="mt-4">
                    <flux:label>{{ __('Password') }}</flux:label>
                    <flux:input name="password" type="password" required autocomplete="new-password" />
                    @error('password')
                        <flux:error>{{ $message }}</flux:error>
                    @enderror
                </flux:field>

                <flux:field class="mt-4">
                    <flux:label>{{ __('Confirm Password') }}</flux:label>
                    <flux:input name="password_confirmation" type="password" required />
                </flux:field>

                <flux:button type="submit" variant="primary" class="w-full mt-6">
                    {{ __('Register') }}
                </flux:button>
            </form>

            <div class="mt-6 text-center text-sm">
                <flux:link :href="route('login')">{{ __('Already registered?') }}</flux:link>
            </div>
        </flux:card>
    </flux:main>

    @fluxScripts
</body>
</html>

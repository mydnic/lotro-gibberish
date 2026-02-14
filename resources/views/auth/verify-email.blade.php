<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ __('Verify Email') }} - {{ config('app.name', 'Lotro Gibberish') }}</title>

    @fluxStyles
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="font-sans antialiased">
    <flux:main class="min-h-screen flex flex-col items-center pt-6 sm:justify-center sm:pt-0">
        <flux:brand href="/" class="mb-6">Lotro Gibberish</flux:brand>

        <flux:card class="w-full sm:max-w-md">
            <flux:heading level="2" class="mb-6 text-center">{{ __('Verify your email address') }}</flux:heading>

            <flux:text class="mb-6 text-center text-sm text-gray-600 dark:text-gray-400">
                {{ __('Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn\'t receive the email, we will gladly send you another.') }}
            </flux:text>

            @if (session('status') == 'verification-link-sent')
                <flux:alert variant="success" class="mb-4">
                    {{ __('A new verification link has been sent to the email address you provided during registration.') }}
                </flux:alert>
            @endif

            <div class="mt-6 flex flex-col gap-4">
                <form method="POST" action="{{ route('verification.send') }}">
                    @csrf
                    <flux:button type="submit" variant="primary" class="w-full">
                        {{ __('Resend Verification Email') }}
                    </flux:button>
                </form>

                <form method="POST" action="{{ route('logout') }}">
                    @csrf
                    <flux:button type="submit" variant="ghost" class="w-full">
                        {{ __('Log out') }}
                    </flux:button>
                </form>
            </div>
        </flux:card>
    </flux:main>

    @fluxScripts
</body>
</html>

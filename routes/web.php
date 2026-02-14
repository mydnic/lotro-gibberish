<?php

use Flux\Flux;
use Livewire\Volt\Volt;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    // Configuration routes
    Route::get('/configuration', \App\Livewire\ConfigurationIndex::class)->name('configuration.index');
    Route::resource('configurations', \App\Http\Controllers\ConfigurationController::class)
        ->except(['index']);
});

// Authentication routes (provided by Laravel Fortify)
require __DIR__.'/auth.php';

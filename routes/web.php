<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'ConfigurationController@index')->name('home');

Route::get('/config/create', 'ConfigurationController@create')->name('configuration.create')->middleware('auth');

Route::prefix('auth')->middleware('auth')->as('user.')->group(function () {
    Route::resource('configuration', 'Auth\ConfigurationController');
});

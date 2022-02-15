<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'ConfigurationController@index')->name('home');

Route::get('/config/create', 'ConfigurationController@create')->name('configuration.create')->middleware('auth');
Route::get('/config/{configuration}', 'ConfigurationController@show')->name('configuration.show');

Route::middleware('auth')->prefix('like')->group(function () {
    Route::post('/config/{configuration}', 'LikeController@like')->name('configuration.like');
});

Route::prefix('auth')->middleware('auth')->as('user.')->group(function () {
    Route::resource('configuration', 'Auth\ConfigurationController');
});

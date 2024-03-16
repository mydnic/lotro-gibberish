## Requirements

- php >= 8.0
- mysql >= 5.7
- composer

## Stack

This site is built with the [Laravel](https://laravel.com/) framework for the back end.

The front end is built with [TailwindCSS](https://tailwindcss.com/), [Inertia](https://inertiajs.com/) and [Vue.js](https://vuejs.org/).

I needed an excuse to learn InertiaJS and Laravel Jetstream so... voila

## Installation

Clone this repo

run `composer install`

run `cp .env.example .env`

Edit .env file with database credentials

run `php artisan key:generate`

run `php artisan migrate`

### Front end

run `yarn`

run `yarn dev`

# Contact

mydnic on discord

# Changelog

## 2024-03-16
- Update discord handles

## 2024-02-14
- Handle Gibberish plugin version now that V3 is out

## 2023-10-17
- Add new category (Mariner class) - sorry for the delay

## 2023-05-11
- Users can now upload images to their config description

## 2022-11-08
- Added Notification to users who starred a config when the latter is updated by its author

## 2022-05-16
- New logo thanks to #dt192

## 2022-03-12
- Put the copy button above the config's code

## 2022-03-01
- Added Dark Mode (based on computer / browser settings)

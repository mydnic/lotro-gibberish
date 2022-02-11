<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Configuration;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::factory()
            ->has(Configuration::factory()->count(rand(10, 20)))
            ->count(10)
            ->create();
    }
}

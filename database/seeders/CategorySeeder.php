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
        Category::create([
            'title' => 'Instances & Raid',
            'icon_path' => 'pve-icon.png',
        ]);

        Category::create([
            'title' => 'Beorning',
            'icon_path' => 'Beorning-icon.png',
        ]);

        Category::create([
            'title' => 'Brawler',
            'icon_path' => 'Brawler-icon.png',
        ]);

        Category::create([
            'title' => 'Burglar',
            'icon_path' => 'Burglar-icon.png',
        ]);

        Category::create([
            'title' => 'Captain',
            'icon_path' => 'Captain-icon.png',
        ]);

        Category::create([
            'title' => 'Champion',
            'icon_path' => 'Champion-icon.png',
        ]);

        Category::create([
            'title' => 'Guardian',
            'icon_path' => 'Guardian-icon.png',
        ]);

        Category::create([
            'title' => 'Hunter',
            'icon_path' => 'Hunter-icon.png',
        ]);

        Category::create([
            'title' => 'Lore-master',
            'icon_path' => 'Lore-master-icon.png',
        ]);

        Category::create([
            'title' => 'Minstrel',
            'icon_path' => 'Minstrel-icon.png',
        ]);

        Category::create([
            'title' => 'Rune-keeper',
            'icon_path' => 'Rune-keeper-icon.png',
        ]);

        Category::create([
            'title' => 'Warden',
            'icon_path' => 'Warden-icon.png',
        ]);
    }
}

<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Configuration>
 */
class ConfigurationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => User::factory()->create(),
            'category_id' => Category::factory()->create(),
            'is_public' => $this->faker->boolean(),
            'language' => $this->faker->randomElement(['en', 'de', 'fr']),
            'title' => $this->faker->words(3, true),
            'description' => $this->faker->sentence(),
            'code' => $this->faker->words(40, true),
        ];
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateConfigurationRequest;
use App\Models\Category;
use App\Models\Configuration;
use Inertia\Inertia;

class ConfigurationController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        $configurations = Configuration::public()
            ->with('category', 'user', 'likeCounter')
            ->orderBy('updated_at', 'desc')
            ->get();

        return inertia('Configuration/Index', [
            'categories' => $categories,
            'configurations' => $configurations,
        ]);
    }

    public function show(Configuration $configuration)
    {
        return inertia('Configuration/Show', [
            'configuration' => $configuration->load('category', 'user', 'likeCounter'),
            'liked' => $configuration->liked(),
            // 'liked' => auth()->check() ? $configuration->liked() : false,
        ]);
    }

    public function edit(Configuration $configuration)
    {
        $this->authorize('update', $configuration);

        return inertia('Configuration/Edit', [
            'configuration' => $configuration,
        ]);
    }

    public function update(UpdateConfigurationRequest $request, Configuration $configuration)
    {
        $this->authorize('update', $configuration);

        //
    }

    public function destroy(Configuration $configuration)
    {
        $this->authorize('delete', $configuration);

        //
    }
}

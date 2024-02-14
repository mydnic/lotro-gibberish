<?php

namespace App\Http\Controllers\Auth;

use Inertia\Inertia;
use App\Models\Category;
use App\Models\Configuration;
use App\Http\Controllers\Controller;
use App\Jobs\NotifyUsersThatConfigIsUpdated;
use App\Http\Requests\StoreConfigurationRequest;
use App\Http\Requests\UpdateConfigurationRequest;

class ConfigurationController extends Controller
{
    public function index()
    {
        $configurations = auth()->user()->configurations()->with('category')->latest()->get();

        return inertia('Auth/Configuration/Index', [
            'configurations' => $configurations,
        ]);
    }

    public function create()
    {
        $categories = Category::all();

        return inertia('Auth/Configuration/Create', compact('categories'));
    }

    public function store(StoreConfigurationRequest $request)
    {
        auth()->user()->configurations()->create($request->validated());

        return to_route('user.configuration.index');
    }

    public function edit(Configuration $configuration)
    {
        $this->authorize('update', $configuration);
        $categories = Category::all();

        return inertia('Auth/Configuration/Edit', [
            'configuration' => $configuration,
            'categories' => $categories,
        ]);
    }

    public function update(UpdateConfigurationRequest $request, Configuration $configuration)
    {
        $this->authorize('update', $configuration);

        $configuration->update($request->validated());

        $configuration->increment('updated_count');

        dispatch(new NotifyUsersThatConfigIsUpdated($configuration));

        return back()->banner('Configuration updated successfully.');
    }

    public function destroy(Configuration $configuration)
    {
        $this->authorize('delete', $configuration);

        $configuration->delete();

        return to_route('user.configuration.index')->banner('Configuration deleted successfully.');
    }
}

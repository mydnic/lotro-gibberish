<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreConfigurationRequest;
use App\Http\Requests\UpdateConfigurationRequest;
use App\Models\Category;
use App\Models\Configuration;
use Inertia\Inertia;

class ConfigurationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $configurations = auth()->user()->configurations()->with('category')->get();

        return Inertia::render('Auth/Configuration/Index', [
            'configurations' => $configurations,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::all();

        return Inertia::render('Auth/Configuration/Create', compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreConfigurationRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreConfigurationRequest $request)
    {
        auth()->user()->configurations()->create($request->validated());

        return to_route('user.configuration.index');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Configuration  $configuration
     * @return \Illuminate\Http\Response
     */
    public function edit(Configuration $configuration)
    {
        $this->authorize('update', $configuration);
        $categories = Category::all();

        return Inertia::render('Auth/Configuration/Edit', [
            'configuration' => $configuration,
            'categories' => $categories,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateConfigurationRequest  $request
     * @param  \App\Models\Configuration  $configuration
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateConfigurationRequest $request, Configuration $configuration)
    {
        $this->authorize('update', $configuration);

        $configuration->update($request->validated());

        $configuration->increment('updated_count');

        return back()->banner('Configuration updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Configuration  $configuration
     * @return \Illuminate\Http\Response
     */
    public function destroy(Configuration $configuration)
    {
        $this->authorize('delete', $configuration);

        $configuration->delete();

        return to_route('user.configuration.index')->banner('Configuration deleted successfully.');
    }
}

<?php

namespace App\Http\Controllers;

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
        $categories = Category::all();
        $configurations = Configuration::public()
            ->with('category', 'user', 'likeCounter')
            ->orderBy('updated_at', 'desc')
            ->get();

        return Inertia::render('Configuration/Index', [
            'categories' => $categories,
            'configurations' => $configurations,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Configuration  $configuration
     * @return \Illuminate\Http\Response
     */
    public function show(Configuration $configuration)
    {
        $config = $configuration->load('category', 'user', 'likeCounter');
        $config->formatted_description = $configuration->formattedDescription();

        return Inertia::render('Configuration/Show', [
            'configuration' => $config,
            'liked' => $configuration->liked(),
            // 'liked' => auth()->check() ? $configuration->liked() : false,
        ]);
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

        return Inertia::render('Configuration/Edit', [
            'configuration' => $configuration,
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

        //
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

        //
    }
}

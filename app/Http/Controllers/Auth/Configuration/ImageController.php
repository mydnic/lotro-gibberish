<?php

namespace App\Http\Controllers\Auth\Configuration;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Validation\Rules\File;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'image' => ['required', File::image()->max(12 * 1024)]
        ]);

        return Storage::url($request->file('image')->store('config-screenshots'));
    }
}

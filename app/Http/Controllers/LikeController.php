<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Configuration;

class LikeController extends Controller
{
    public function like(Configuration $configuration)
    {
        if ($configuration->liked()) {
            $configuration->unlike();
        } else {
            $configuration->like();
        }

        return back();
    }
}

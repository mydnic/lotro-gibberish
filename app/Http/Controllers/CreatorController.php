<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\DB;

class CreatorController extends Controller
{
    public function index()
    {
        $creators = User::select('users.*')
            ->withCount('configurations')
            ->with(['configurations' => function ($query) {
                $query->select('user_id', DB::raw('SUM(like_counter_count) as total_stars'))
                    ->groupBy('user_id');
            }])
            ->having('configurations_count', '>', 0)
            ->orderByDesc('configurations_count')
            ->limit(50)
            ->get()
            ->map(function ($user) {
                $totalStars = DB::table('configurations')
                    ->where('user_id', $user->id)
                    ->sum('like_counter_count');

                return [
                    'id' => $user->id,
                    'username' => $user->username,
                    'support_link' => $user->support_link,
                    'configurations_count' => $user->configurations_count,
                    'total_stars' => $totalStars ?? 0,
                ];
            })
            ->sortByDesc('total_stars')
            ->values();

        return inertia('Creators/Index', [
            'creators' => $creators,
        ]);
    }
}

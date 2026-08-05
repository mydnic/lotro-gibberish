<?php

namespace App\Http\Controllers;

use App\Models\Configuration;
use App\Models\User;

class CreatorController extends Controller
{
    public function index()
    {
        $configurationMorphClass = (new Configuration())->getMorphClass();

        $creators = User::query()
            ->select('users.id', 'users.username', 'users.support_link')
            ->withCount(['configurations' => function ($query) {
                $query->where('is_public', true);
            }])
            ->addSelect([
                'total_stars' => Configuration::query()
                    ->selectRaw('COALESCE(SUM(likeable_like_counters.count), 0)')
                    ->leftJoin('likeable_like_counters', function ($join) use ($configurationMorphClass) {
                        $join->on('likeable_like_counters.likeable_id', '=', 'configurations.id')
                            ->where('likeable_like_counters.likeable_type', '=', $configurationMorphClass);
                    })
                    ->whereColumn('configurations.user_id', 'users.id')
                    ->where('configurations.is_public', true),
            ])
            ->having('configurations_count', '>', 0)
            ->orderByDesc('total_stars')
            ->orderByDesc('configurations_count')
            ->limit(50)
            ->get()
            ->map(function ($user) {
                return [
                    'id' => $user->id,
                    'username' => $user->username,
                    'support_link' => $user->support_link,
                    'configurations_count' => $user->configurations_count,
                    'total_stars' => (int) $user->total_stars,
                ];
            });

        return inertia('Creators/Index', [
            'creators' => $creators,
        ]);
    }

    public function show(User $user)
    {
        $configurationMorphClass = (new Configuration())->getMorphClass();

        $configurations = Configuration::query()
            ->public()
            ->where('user_id', $user->id)
            ->with('category', 'user', 'likeCounter')
            ->orderByDesc('updated_at')
            ->paginate(12)
            ->withQueryString();

        $publicConfigurationsCount = $user->configurations()
            ->where('is_public', true)
            ->count();

        $totalStars = Configuration::query()
            ->where('configurations.user_id', $user->id)
            ->where('configurations.is_public', true)
            ->leftJoin('likeable_like_counters', function ($join) use ($configurationMorphClass) {
                $join->on('likeable_like_counters.likeable_id', '=', 'configurations.id')
                    ->where('likeable_like_counters.likeable_type', '=', $configurationMorphClass);
            })
            ->sum('likeable_like_counters.count');

        return inertia('Creators/Show', [
            'creator' => [
                'id' => $user->id,
                'username' => $user->username,
                'support_link' => $user->support_link,
                'configurations_count' => $publicConfigurationsCount,
                'total_stars' => (int) ($totalStars ?? 0),
            ],
            'configurations' => $configurations,
        ]);
    }
}

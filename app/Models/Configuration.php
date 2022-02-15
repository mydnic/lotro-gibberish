<?php

namespace App\Models;

use Webpatser\Uuid\Uuid;
use Conner\Likeable\Likeable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Configuration extends Model
{
    use HasFactory, Likeable;

    protected $fillable = [
        'title',
        'description',
        'code',
        'category_id',
        'language',
        'is_public',
    ];

    /**
     *  Setup model event hooks
     */
    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            $model->uuid = (string) Uuid::generate(4);
        });
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function scopePublic($query)
    {
        return $query->where('is_public', true);
    }

    public function getRouteKeyName()
    {
        return 'uuid';
    }
}

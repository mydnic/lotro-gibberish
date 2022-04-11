<?php

namespace App\Models;

use Webpatser\Uuid\Uuid;
use Conner\Likeable\Likeable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Configuration extends Model
{
    use HasFactory, Likeable;

    protected $appends = [
        'formatted_description'
    ];

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

    public function getFormattedDescriptionAttribute()
    {
        $content = htmlspecialchars($this->description);

        $regex_images = '~https?://\S+?(?:JPEG|JPG|GIF|PNG|png|gif|jpe?g)~';
        $regex_links = '~
                        (?<!src=\') # negative lookbehind (no src=\' allowed!)
                        https?://   # http:// or https://
                        \S+         # anything not a whitespace
                        \b          # a word boundary
                        ~x';        # verbose modifier for these explanations

        $content = preg_replace($regex_images, "<img src='\\0'>", $content);
        $content = preg_replace($regex_links, "<a href='\\0'>\\0</a>", $content);
        return $content;
    }

    public function getRouteKeyName()
    {
        return 'uuid';
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    public function cates()
    {
        return $this->belongsToMany(Category::class, 'articles_categories', 'article_id', 'category_id');
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'articles_tags', 'article_id', 'tag_id');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    public function articles()
    {
        return $this->belongsToMany(Article::class, 'articles_tags', 'tag_id', 'article_id');
    }
}

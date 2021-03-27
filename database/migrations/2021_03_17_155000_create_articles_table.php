<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title')->comment('文章标题');
            $table->text("desc")->nullable()->comment('文章描述');
            $table->longText("content")->nullable()->comment('文章内容');
            $table->tinyInteger("top")->default(0)->comment('是否置顶');
            $table->unsignedInteger('views')->default(0)->comment('阅读量');
            $table->unsignedInteger('likes')->default(0)->comment('点赞量');
            $table->tinyInteger("status")->default(0)->comment('状态（0：草稿；1：已发表；-1：回收站）');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('articles');
    }
}

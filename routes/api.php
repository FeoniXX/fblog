<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group(['prefix' => '/v1/admin'], function () {
    // 分类相关
    Route::get(
        '/category',
        'Api\Admin\CategoryController@getCates'
    );
    Route::get(
        '/category/{id}',
        'Api\Admin\CategoryController@getCate'
    );
    Route::post(
        '/category',
        'Api\Admin\CategoryController@create'
    );
    Route::put(
        '/category/{id}',
        'Api\Admin\CategoryController@update'
    );
    Route::delete(
        '/category/{id}',
        'Api\Admin\CategoryController@delete'
    );

    // 标签相关
    Route::get(
        '/tag',
        'Api\Admin\TagController@getTags'
    );
    Route::post(
        '/tag',
        'Api\Admin\TagController@create'
    );
    Route::delete(
        '/tag/{id}',
        'Api\Admin\TagController@delete'
    );

    // 友链相关
    Route::get(
        '/link',
        'Api\Admin\LinkController@getLinks'
    );
    Route::get(
        '/link/{id}',
        'Api\Admin\LinkController@getLink'
    );
    Route::post(
        '/link',
        'Api\Admin\LinkController@create'
    );
    Route::put(
        '/link/{id}',
        'Api\Admin\LinkController@update'
    );
    Route::delete(
        '/link/{id}',
        'Api\Admin\LinkController@delete'
    );

    // 文章相关
    Route::get(
        '/article',
        'Api\Admin\ArticleController@getArticles'
    );
    Route::get(
        '/article/{id}',
        'Api\Admin\ArticleController@getArticle'
    );
    Route::post(
        '/article',
        'Api\Admin\ArticleController@create'
    );
    Route::put(
        '/article/{id}',
        'Api\Admin\ArticleController@update'
    );
    Route::put(
        '/article/top/{id}',
        'Api\Admin\ArticleController@setTop'
    );
    Route::delete(
        '/article/{id}',
        'Api\Admin\ArticleController@delete'
    );
    Route::put(
        '/article/recover/{id}',
        'Api\Admin\ArticleController@recover'
    );
});

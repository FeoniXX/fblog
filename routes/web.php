<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', function () {
    return view('app');
});

Route::get('/article/list', function () {
    return view('app');
});

Route::get('/article/category/{id}', function () {
    return view('app');
});

Route::get('/article/tag/{id}', function () {
    return view('app');
});

Route::get('/article/search/{keyword}', function () {
    return view('app');
});

Route::get('/article/detail/{id}', function () {
    return view('app');
});

Route::get('/link', function () {
    return view('app');
});

Route::get('/about', function () {
    return view('app');
});

Route::get('/admin', function () {
    return view('app');
});

Route::get('/admin/login', function () {
    return view('app');
});

Route::get('/admin/article', function () {
    return view('app');
});

Route::get('/admin/article/create', function () {
    return view('app');
});

Route::get('/admin/article/update/{id}', function () {
    return view('app');
});

Route::get('/admin/category', function () {
    return view('app');
});

Route::get('/admin/category/create', function () {
    return view('app');
});

Route::get('/admin/category/update/{id}', function () {
    return view('app');
});

Route::get('/admin/tag', function () {
    return view('app');
});

Route::get('/admin/link', function () {
    return view('app');
});

Route::get('/admin/link/create', function () {
    return view('app');
});

Route::get('/admin/link/update/{id}', function () {
    return view('app');
});

Route::get('/admin/message', function () {
    return view('app');
});
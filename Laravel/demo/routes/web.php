<?php

use Illuminate\Support\Facades\Route;

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
    return view('test');
});

// Route::prefix('backend')->namespace('Backend')->group(function(){
//     Route::get('user','UserController@index')->name('backend.user');
//     Route::get('product','ProductController@index')->name('backend.product');
//     Route::get('category','CategoryController@index')->name('backend.category');
//     Route::get('news','NewsController@index')->name('backend.news');
// });

Route::group(['prefix' => 'backend', 'namespace' => 'Backend'],function(){
    // Route::get('user','UserController@index')->name('backend.user.index');
    Route::get('user/create','UserController@create')->name('backend.user.create');
    Route::post('user','UserController@store')->name('backend.user.store');





    Route::get('product','ProductController@index')->name('backend.product');
    Route::get('category','CategoryController@index')->name('backend.category');
    Route::get('news','NewsController@index')->name('backend.news');
});


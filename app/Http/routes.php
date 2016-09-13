<?php

/*
|--------------------------------------------------------------------------
| Return index view for every routes but the API's ones
|--------------------------------------------------------------------------
*/

Route::get('{slug}', function() {
    return view('welcome');
})
->where('slug', '(?!api)([A-z\d-\/_.]+)?');


/*
|--------------------------------------------------------------------------
| Application API routes
|--------------------------------------------------------------------------
*/

Route::group(['prefix' => 'api'], function() {
    Route::resource('tweets', 'TweetController');
});
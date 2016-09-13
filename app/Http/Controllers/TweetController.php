<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Http\Library\TwitterAPIExchange;

class TweetController extends Controller
{
    public $settings = array(
        'oauth_access_token' => "170182726-6eYNinVniEEp8d7E8A2XNMz2XxTm7rqmt3qrmOIK",
        'oauth_access_token_secret' => "Lhhin2R1EDyl1AkA8A8Ul5fKePRhCit44Y0QhUX7BgyKL",
        'consumer_key' => "CIbPkxi5mhglVqJLF7wqTOZ2e",
        'consumer_secret' => "96I1oSWxP1KMJeqOIGr0uPGXLczKhyE64FHRBzWbOTJPsFxhqn"
    );

    /** URL for REST request, see: https://dev.twitter.com/docs/api/1.1/ **/
    public $url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $getfield = '?screen_name=twitterapi&count=5';
        $requestMethod = 'GET';
        $twitter = new TwitterAPIExchange($this->settings);
        $json = $twitter->setGetfield($getfield)
                     ->buildOauth($this->url, $requestMethod)
                     ->performRequest();

        return response()->json($json);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $getfield = '?screen_name=twitterapi&count=5';
        $requestMethod = 'GET';
        $twitter = new TwitterAPIExchange($this->settings);
        $json = $twitter->setGetfield($getfield)
                     ->buildOauth($this->url, $requestMethod)
                     ->performRequest();

        $twitter_data2 = json_decode($json, true);
        
        return response()->json($twitter_data2[$id]["text"]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

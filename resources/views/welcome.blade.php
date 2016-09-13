<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    @if(getenv('APP_ENV')=='production' || getenv('APP_ENV')=='development')    
    	<link rel="stylesheet" href="{{ asset('assets/prod/css/main.min.css') }}" />
	@else
	    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}" />
        <link rel="stylesheet" href="{{ asset('assets/css/bootstrap.min.css') }}">
	@endif

    <title>Test page</title>
</head>
<body>
    <div id="body-slide" class="full-height"></div>

    @if(getenv('APP_ENV')=='production' || getenv('APP_ENV')=='development')    
    	<script src="{{ asset('assets/prod/js/main.min.js') }}"></script>
	@else
	    <script src="{{ asset('assets/js/app.js') }}"></script>
	@endif
</body>
</html>
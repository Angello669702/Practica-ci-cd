<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/saludo', function () {
    return response()->json([
        'mensaje' => 'Hola Paco',
        'suma' => 3 + 2,
        'version' => phpversion()
    ]);
});

<?php
namespace App\Http\Controllers;
use App\User;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UserController extends Controller
{
    // Methods

    public function index()
    {
        return response(User::all()->jsonSerialize(), Response::HTTP_OK);
    }
}

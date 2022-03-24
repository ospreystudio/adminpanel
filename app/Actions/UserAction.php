<?php


namespace App\Actions;


use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserAction
{
    public function run($request)
    {
        $user = User::create([
           'name' => $request['name'],
            'email' => $request['email'],
            'password' =>Hash::make($request['password']),
        ]);
        return $user;
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Actions\UserAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\EditRequest;
use App\Http\Requests\UserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return UserResource::collection(User::all());
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
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function store(UserRequest $request, UserAction $userAction)
    {
        $user = $userAction->run($request->all());

        if ($request->has('role')) {
            $user->assignRole($request->input('role'));
        }

        if ($request->has('permissions')) {
            $user->givePermissionTo(collect($request->permissions)->pluck('id')->toArray());
        }


        return response(['message'=>'User Created', 'user'=>$user]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
    public function update(EditRequest $request, User $user)
    {
        $user->update($request->validated());

        if ($request->has('role')) {
            $user->assignRole($request->input('role'));
        }

        if ($request->has('permissions')) {
            $user->givePermissionTo(collect($request->permissions)->pluck('id')->toArray());
        }

        return response(['message'=>'User Updated', 'user'=>$user]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();


    }
}

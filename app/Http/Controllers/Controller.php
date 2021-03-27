<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Response;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected function success($data, $message = "success")
    {
        return Response::json([
            'errcode' => 0,
            'message' => $message,
            'data' => $data,
        ]);
    }

    protected function error($errcode, $message = 'failed')
    {
        return Response::json([
            'errcode' => $errcode,
            'message' => $message,
        ]);
    }
}

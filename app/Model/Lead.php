<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{
    protected $fillable =
    [
        'name',
        'email',
        'message'
    ];
}

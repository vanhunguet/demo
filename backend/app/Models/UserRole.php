<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserRole extends Model
{
    public    $timestamps = false;
    protected $table      = self::TABLE;
    const TABLE = 'user_role';

    const _USER_ID = 'user_id';
    const _ROLE_ID = 'role_id';

    protected $fillable = [
        self::_USER_ID,
        self::_ROLE_ID,
    ];
}

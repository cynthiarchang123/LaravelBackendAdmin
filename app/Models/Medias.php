<?php

namespace App\Models;

//use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
//use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Medias extends Model implements HasMedia
{
    use InteractsWithMedia;

    //public $table="medias";    
    public static function last()
    {
        return static::all()->last();
    }

}

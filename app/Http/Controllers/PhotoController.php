<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Photos;

class PhotoController extends Controller
{
    //
    public function create()
    {
        $photos = Photos::all();
        return view('imgUpload', compact('photos'));
    }

    public function storeMultiple(Request $request)//多筆上傳圖
    {
        ////----------------剛開始寫的---------
        //echo $request->hasfile('filenames'); //回傳1表示有檔案
        //dd($request->file('filenames')->extension());

        $files = [];
        $sizes = [];
        if($request->hasfile('filenames'))
         {
            foreach($request->file('filenames') as $file)
            {
                //dd($file->getSize());
                $name = $file->getClientOriginalName();
                $size = $file->getSize();
                $file->storeAs('public/images', $name);

                $photos = new photos();
                $photos -> name = $name;
                $photos -> size = $size;
                $photos -> users_id = 1;
                $photos -> is_deleted = false;
                //$photos -> img_type = $img_type;

                $photos->created_at=date('Y-m-d H:i:s');
                //echo $photos;
                //dd($request->file());
                // public function save(array $options = array()) {
                //     if(isset($this->remember_token))
                //         unset($this->remember_token);
                
                //     return parent::save($options);
                // }
                $photos->save();

            }
         }
        return redirect()->back()->with('success', 'Data Your files has been successfully added');

        // return $imgType;
        // return $size;
        // return $name;
        //dd($request->file());
        //dd($request);
    }

    public function store(Request $request)//單筆上傳圖
    {
        //echo $request->hasfile('filenames'); //回傳1表示有檔案
        //dd($request->file('filenames')->extension());

        $name = $request->file('image')->getClientOriginalName();
        $size = $request->file('image')->getSize();
        $img_type = $request->file('image')->getClientOriginalExtension();

        //$request->file('image')->store('public/images');  //用電腦預設名稱存入public/images
        $request->file('image')->storeAs('public/images', $name);  //用檔名存入public/images
        
        $photos = new Photos();
        $photos -> name = $name;
        $photos -> size = $size;
        $photos -> users_id = 1;
        $photos -> is_deleted = false;
        //$photos -> img_type = $img_type;

        $photos->created_at=date('Y-m-d H:i:s');
        //echo $photos;
        //dd($request->file());
        $photos->save();
        return redirect()->back()->with('success', 'Data Your files has been successfully added');

        // return $imgType;
        // return $size;
        // return $name;
        //dd($request->file());
        //dd($request);

    }
}

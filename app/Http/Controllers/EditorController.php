<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Image;
use App\Models\Medias;

class EditorController extends Controller
{
    //
    public function index(){
        //
        //echo "index";
        //return view('editor');
        return view('editor');
    }
    // public function store(Request $request){
    //     echo $request -> input('editor');
    //     //echo $request;
    //     // $media = new Medias();
    //     // $media->id = 0;
    //     // $media->exists = true;
    //     // $image = $media->addMedia(key:'upload')->toMediaCollection(collectionName:'images');
        
    //     // return response()->json([
    //     //     'url' => 'https://laraveldaily.com/wp-content/uploads/2018/12/laravel-daily-2.png'
    //     //     //'url' => $image->getUrl()
    //     // ]);
    // }
    public function store(Request $request){
        echo $request -> input('editor');
        //echo $request;
        // $media = new Medias();
        // $media->id = 0;
        // $media->exists = true;
        // $image = $media->addMedia(key:'upload')->toMediaCollection(collectionName:'images');
        
        return response()->json([
            'url' => 'http://127.0.0.1:8000/storage/images/images.jpeg'
            //'url' => $image->getUrl()
        ]);
    }
    public function imgupload(Request $request){
        // return response()->json([
        //     'url' => 'http://127.0.0.1:8000/storage/images/images.jpeg'
        //     //'url' => $image->getUrl()
        // ]);
        echo $request -> input('editor');
        if($request->hasFile('upload')) {
            $originName = $request->file('upload')->getClientOriginalName();
            $fileName = pathinfo($originName, PATHINFO_FILENAME);
            $extension = $request->file('upload')->getClientOriginalExtension();
            $fileName = $fileName.'_'.time().'.'.$extension;
        
            $request->file('upload')->move(public_path('images'), $fileName);
   
            $CKEditorFuncNum = $request->input('CKEditorFuncNum');
            $url = asset('images/'.$fileName); 
            $msg = 'Image uploaded successfully'; 
            $response = "<script>window.parent.CKEDITOR.tools.callFunction($CKEditorFuncNum, '$url', '$msg')</script>";
               
            @header('Content-type: text/html; charset=utf-8'); 
            echo $response;
        }
        // if($request->hasFile('upload')) {
        //     //get filename with extension
        //     $filenamewithextension = $request->file('upload')->getClientOriginalName();       
        //     //get filename without extension
        //     $filename = pathinfo($filenamewithextension, PATHINFO_FILENAME);       
        //     //get file extension
        //     $extension = $request->file('upload')->getClientOriginalExtension();       
        //     //filename to store
        //     $filenametostore = $filename.'_'.time().'.'.$extension;       
        //     //Upload File
        //     $request->file('upload')->storeAs('public/uploads', $filenametostore);
        //     $request->file('upload')->storeAs('public/uploads/thumbnail', $filenametostore);
        //     //Resize image here
        //     $thumbnailpath = public_path('storage/uploads/thumbnail'.$filenametostore);
        //     $img = Image::make($thumbnailpath)->resize(500, 150, function($constraint){
        //         $constraint->aspectRatio();
        //     });
        //     $img->save($thumbnailpath);
        //     echo json_encode([
        //         'default' => asset('storage/uploads/'.$filenametostore),
        //         '500' => asset('storage/uploads/thumbnail'.$filenametostore)
        //     ]);
        //     // $CKEditorFuncNum = $request->input('CKEditorFuncNum');
        //     // $url = asset('storage/uploads/'.$filenametostore);
        //     // $msg = 'Image successfully uploaded';
        //     // $re = "<script>window.parent.CKEDITOR.tools.callFunction($CKEditorFuncNum, '$url', '$msg')</script>";
              
        //     // // Render HTML output
        //     // @header('Content-type: text/html; charset=utf-8');
        //     // echo $re;
        // }
    }
    // public function upload(Request $request){
    //     //echo $request -> input('editor');
    //     if($request->hasFile('upload')) {
    //         //get filename with extension
    //         $filenamewithextension = $request->file('upload')->getClientOriginalName();
       
    //         //get filename without extension
    //         $filename = pathinfo($filenamewithextension, PATHINFO_FILENAME);
       
    //         //get file extension
    //         $extension = $request->file('upload')->getClientOriginalExtension();
       
    //         //filename to store
    //         $filenametostore = $filename.'_'.time().'.'.$extension;
       
    //         //Upload File
    //         $request->file('upload')->storeAs('public/uploads', $filenametostore);
  
    //         $CKEditorFuncNum = $request->input('CKEditorFuncNum');
    //         $url = asset('storage/uploads/'.$filenametostore);
    //         $msg = 'Image successfully uploaded';
    //         $re = "<script>window.parent.CKEDITOR.tools.callFunction($CKEditorFuncNum, '$url', '$msg')</script>";
              
    //         // Render HTML output
    //         @header('Content-type: text/html; charset=utf-8');
    //         echo $re;
    //     }
    // }
}

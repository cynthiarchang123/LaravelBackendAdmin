<?php

use Illuminate\Support\Facades\Route;
use App\Models\Photos;
use App\Models\Medias;
use App\Http\Controllers\EditorController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\PhotoController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/welcome', function () {
    return view('welcome');
});
Route::get('/', function () {
    return view('manageActivities');
});

Route::get('/main', function () {
    return view('main');
});
Route::get('/manageActivities', function () {
    return view('manageActivities');
});
Route::get('/manageNews', function () {
    return view('manageNews');
});
Route::get('/manageMails', function () {
    return view('manageMails');
});
Route::get('/manageMembers', function () {
    return view('manageMembers');
});

Route::get('/contact-us',[ContactController::class, 'contact']);
Route::post('/send-message',[ContactController::class, 'sendEmail'])->name('contact.send');


Route::get('ckeditor', [EditorController::class, "index"]);
//Route::post('editor', [EditorController::class, "store"])->name('images.store');
Route::post('ckeditor/imgupload', [EditorController::class, "upload"])->name('images.store');


Route::get('editor', [EditorController::class, "index"]);
Route::post('editor', [EditorController::class, "store"])->name('images.store');
Route::post('editor', [EditorController::class, "imgupload"])->name('images.store');

// Route::get('post', function () {
//     Medias::create()
//         ->addMedia(storage_path('demo/AdobeStock.jpeg'))
//         ->toMediaCollection();
//     //return view('post');
// });

Route::get('post', [EditorController::class, "index"]);
Route::post('post', [EditorController::class, "store"])->name('images.store');
Route::post('post/image_upload', [EditorController::class, "upload"])->name('upload');



Route::get('/imgUpload', [PhotoController::class, 'create']);
Route::post('/imgUpload', [PhotoController::class, 'store']);//單筆上傳圖
Route::post('/imgUpload', [PhotoController::class, 'storeMultiple']);//多筆上傳圖


Auth::routes(['verify' => true]);

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');

Route::get('/email/verify', function () {
    return view('auth.verify-email');
})->middleware('auth')->name('verification.notice');
<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Mail;

class ContactController extends Controller
{
    //
    public function contact(Request $request)
    {
        return view('contact-us');
    }
    public function sendEmail(Request $request)
    {
        $details = [
            'name' => $request -> name,
            'email' => $request -> email,
            'tel' => $request -> tel,
            'message' => $request -> message
        ];
        Mail::to('iicynthiar@gmail.com')->send(new ContactMail($details));
        //return 'Your message has been sent successfully!';
        return back()->with('message_sent','Your message has been sent successfully!');
    }

}

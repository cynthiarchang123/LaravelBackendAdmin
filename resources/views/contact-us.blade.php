<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Contact Us</title>
        <style>
        </style>
        <link rel="stylesheet" href="{{ asset('bootstrap.min.css') }}">
    </head>
    <body>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <div class="card">
                            <div class="card-header">
                            <h4>Contact Us</h4>
                            </div>
                            <div class="card-body">
                                @if(Session::has('message_sent'))
                                    <div class="alert alert-success" role="alert">
                                    {{Session::get('message_sent')}}
                                    </div>
                                @endif
                                <form action="{{ route('contact.send') }}" method="POST" enctype="multipart/form-data">
                                @csrf
                                <div class="form-group">
                                    <label>Name</label>
                                    <input type="text" class="form-control" name="name" placeholder="Enter your name" value="{{ old('name')}}">
                                </div>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="text" class="form-control" name="email" placeholder="Enter your Email" value="{{ old('email')}}">
                                </div>
                                <div class="form-group">
                                    <label>Tel</label>
                                    <input type="text" class="form-control" name="tel" placeholder="Enter your tel" value="{{ old('tel')}}">
                                </div>
                                <div class="form-group">
                                    <label>Message</label>
                                    <textarea name="message" class="form-control" name="message" cols="4" rows="4">{{ old('message')}}</textarea>
                                </div>
                                <button class="btn btn-primary">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </body>
    </html>
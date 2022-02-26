<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>ContactForm</title>
    <link rel="stylesheet" href="{{ asset('bootstrap.min.css') }}">
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-6 offset mt-5">
                <h4>Contact Us</h4><hr/>
                <form action="{{ route('send.email') }}" method="POST" enctype="multipart/form-data">
                @csrf
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" placeholder="Enter your name" value="{{ old('name')}}">
                    @error('name')<span class="text-danger">{{ $message }}</span>@enderror
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" placeholder="Enter your Email" value="{{ old('email')}}">
                    @error('email') <span class="text-danger">{{ $message }}</span> @enderror
                </div>
                <div class="form-group">
                    <label>Subject</label>
                    <input type="text" class="form-control" placeholder="Enter your Subject" value="{{ old('subject')}}">
                    @error('subject') <span class="text-danger">{{ $message }}</span> @enderror
                </div>
                <div class="form-group">
                    <label>Message</label>
                    <textarea name="message" class="form-control" cols="4" rows="4">{{ old('message')}}</textarea>
                    @error('message') <span class="text-danger">{{ $message }}</span> @enderror
                </div>
                <button class="btn btn-primary">Send</button>
                </form>
            </div>
        </div>
    </div>
</body>
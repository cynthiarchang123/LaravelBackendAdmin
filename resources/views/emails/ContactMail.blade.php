<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Contact Form</title>
        <style>
        </style>
        <link rel="stylesheet" href="{{ asset('bootstrap.min.css') }}">
    </head>
    <body>
        <h1>Contact Message</h1>
        <p>Name: {{$details['name']}}</p>
        <p>Email: {{$details['email']}}</p>
        <p>Tel: {{$details['tel']}}</p>
        <p>Message: {{$details['message']}}</p>
    </body>
    </html>
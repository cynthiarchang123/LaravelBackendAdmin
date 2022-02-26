<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>CKEditor 5 – Classic editor</title>
    <script src="https://cdn.ckeditor.com/4.12.1/standard/ckeditor.js"></script>
    <!-- <script src="https://cdn.ckeditor.com/ckeditor5/31.1.0/classic/ckeditor.js"></script> -->
</head>
<body>
    <h1>Classic editor</h1>
    <form method="post" action="/ckeditor" enctype="multipart/form-data">
    @csrf
        <textarea name="editor1"></textarea>
        <input type="submit" name="Upload" text="Submit"/>
    </form>
    <!-- <script src="{{ asset('ckeditor5/ckeditor.js') }}"></script> -->
     
    <script type="text/javascript">
        CKEDITOR.replace('editor1', {
            filebrowserUploadUrl: "{{route('images.store', ['_token' => csrf_token() ])}}",
            filebrowserUploadMethod: 'form'
        });
    </script>
</body>
</html>
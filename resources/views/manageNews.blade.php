@extends('layouts.app1')

@section('content')
    <div>
        <div class="d-flex p-2">
            <h5 class="mr-auto text-primary">最新消息</h5>
            <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModalCenter">
            新增
            </button>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">標題</th>
                    <th scope="col">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>2022-02-22-最新消息1</td>
                    <td>
                        <button type="button" class="btn btn-outline-info btn-sm">修改</button>
                        <button type="button" class="btn btn-outline-info btn-sm">刪除</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>2022-02-22-最新消息1</td>
                    <td>
                        <button type="button" class="btn btn-outline-info btn-sm">修改</button>
                        <button type="button" class="btn btn-outline-info btn-sm">刪除</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                </a>
                </li>
            </ul>
        </nav>
        <!-- Modal 新增 -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                @include('ckeditor5')    
                
            </div>
        </div>
    </div>
@endsection
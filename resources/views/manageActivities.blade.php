
@extends('layouts.app1')
@section('content')
    <div>
        <div class="d-flex p-2">
            <h5 class="mr-auto text-primary">活動管理</h5>
            <button type="button" class="btn btn-primary btn-sm">新增</button>
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
    </div>
@endsection
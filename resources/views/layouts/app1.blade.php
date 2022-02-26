<!DOCTYPE html>
<html lang="en">
    <head>
       <title>歡迎光臨後台網頁管理-百麗保險經紀人股份有限公司</title>
        @extends('layouts.meta')
        @extends('layouts.css')
    </head>
    <body>
        <div class="backAdmin">
            <div class="row">
                <div class="col-12 adminHead">
                    <div class="p-2">
                        <div class="d-flex">
                            <div class="text-warning mr-auto">後台管理</div>
                            <div class="text-warning">Admin</div>
                            <div class=""><a href="{{ route('login') }}" class="a3">登出</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-admin adminNav">
                    <div class="p-2">
                        <div class="list-group listMenu appNav" id="list-tab" role="tablist">
                            <a class="list-group-item list-group-item-action active" href="manageNews" id="openUrl">最新消息</a>
                            <a class="list-group-item list-group-item-action" href="manageActivities">活動管理</a>
                            <a class="list-group-item list-group-item-action" href="manageMails">郵件管理</a>
                            <a class="list-group-item list-group-item-action" href="manageMembers">會員管理</a>
                        </div>
                        <!-- <div class="list-group listMenu" id="list-tab" role="tablist">
                            <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="news" role="tab" aria-controls="home">最新消息</a>
                            <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="activity" role="tab" aria-controls="profile">活動管理</a>
                            <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">郵件管理</a>
                            <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">會員管理</a>
                        </div> -->
                    </div>
                </div>
                <div class="col-container adminContainer">
                    <div class="p-2">
                        <div class="tab-content" id="nav-tabContent">
                            <div class="">
                                @yield('content')
                            </div>
                            <!-- <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                                <div class="d-flex p-2">
                                    <h5 class="mr-auto">最新消息</h5>
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
                            <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                                <h2>活動管理</h2>
                                <ul class="list-group listTxt">
                                    <li class="list-group-item">Cras justo odio</li>
                                    <li class="list-group-item">Dapibus ac facilisis in</li>
                                    <li class="list-group-item">Morbi leo risus</li>
                                    <li class="list-group-item">Porta ac consectetur ac</li>
                                    <li class="list-group-item">Vestibulum at eros</li>
                                </ul>
                            </div>
                            <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
                                <h2>郵件管理</h2>
                                <ul class="list-group listTxt">
                                    <li class="list-group-item">Cras justo odio</li>
                                    <li class="list-group-item">Dapibus ac facilisis in</li>
                                    <li class="list-group-item">Morbi leo risus</li>
                                    <li class="list-group-item">Porta ac consectetur ac</li>
                                    <li class="list-group-item">Vestibulum at eros</li>
                                </ul>
                            </div>
                            <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
                                <h2>會員管理</h2>
                                <ul class="list-group listTxt">
                                    <li class="list-group-item">Cras justo odio</li>
                                    <li class="list-group-item">Dapibus ac facilisis in</li>
                                    <li class="list-group-item">Morbi leo risus</li>
                                    <li class="list-group-item">Porta ac consectetur ac</li>
                                    <li class="list-group-item">Vestibulum at eros</li>
                                </ul>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </body>
</html>

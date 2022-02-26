@if (Route::has('login'))
    <div class="hidden fixed top-0 right-0 px-6 py-4 sm:block">
        @auth
            @include('manageActivities')
        @else
            @include('index')
        @endauth
    </div>
@endif
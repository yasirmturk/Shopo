@extends( 'layout.base' )

@section( 'layout.base.body' )
    <div id="page-container" class="h-full w-full flex">
        <div class="container flex-auto flex-col items-center justify-center flex m-4 sm:mx-auto">
            <div class="flex justify-center items-center py-6">
                <img class="w-32" src="{{ asset( 'svg/topshop-icon.svg' ) }}" alt="Shopoo">
            </div>
            <div class="ns-box rounded shadow w-full md:w-1/2 lg:w-1/3 overflow-hidden">
                <div id="section-header" class="ns-box-header p-4">
                    <p class="text-center b-8 text-sm">{{ __( "If you see this page, this means Shopoo is correctly installed. Now you can login with your account to manage this store" ) }}</p>
                </div>
                <div class="ns-box-footer flex shadow border-t">
                    <div class="flex w-1/3"><a class="link text-sm w-full py-2 text-center" href="{{ ns()->route( 'ns.dashboard.home' ) }}">{{ __( 'Dashboard' ) }}</a></div>
                    <div class="flex w-1/3"><a class="link text-sm w-full py-2 text-center" href="{{ ns()->route( 'ns.login' ) }}">{{ __( 'Sign In' ) }}</a></div>
                    <div class="flex w-1/3"><a class="link text-sm w-full py-2 text-center" href="{{ ns()->route( 'ns.register' ) }}">{{ __( 'Sign Up' ) }}</a></div>
                </div>
            </div>
        </div>
    </div>
@endsection
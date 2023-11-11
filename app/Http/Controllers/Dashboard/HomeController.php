<?php

/**
 * NexoPOS Controller
 *
 * @since  1.0
 **/

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\View;

class HomeController extends DashboardController
{
    public function welcome()
    {
        return View::make( 'welcome', [
            'title' => sprintf(
                __( 'POS &mdash; %s' ),
                ns()->option->get( 'ns_store_name', 'Shopoo ' . config( 'nexopos.version' ) )
            ),
        ]);
    }
}

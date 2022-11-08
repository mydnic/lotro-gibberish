<?php

namespace App\Observers;

use App\Models\User;
use App\Models\Configuration;
use App\Notifications\ConfigurationUpdatedNotification;
use Illuminate\Support\Facades\Notification;

class ConfigurationObserver
{
    /**
     * Handle the Configuration "created" event.
     *
     * @param  \App\Models\Configuration  $configuration
     * @return void
     */
    public function created(Configuration $configuration)
    {
        //
    }

    /**
     * Handle the Configuration "updated" event.
     *
     * @param  \App\Models\Configuration  $configuration
     * @return void
     */
    public function updated(Configuration $configuration)
    {
        //
    }

    /**
     * Handle the Configuration "deleted" event.
     *
     * @param  \App\Models\Configuration  $configuration
     * @return void
     */
    public function deleted(Configuration $configuration)
    {
        //
    }

    /**
     * Handle the Configuration "restored" event.
     *
     * @param  \App\Models\Configuration  $configuration
     * @return void
     */
    public function restored(Configuration $configuration)
    {
        //
    }

    /**
     * Handle the Configuration "force deleted" event.
     *
     * @param  \App\Models\Configuration  $configuration
     * @return void
     */
    public function forceDeleted(Configuration $configuration)
    {
        //
    }
}

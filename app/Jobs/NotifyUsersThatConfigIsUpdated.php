<?php

namespace App\Jobs;

use App\Models\User;
use App\Models\Configuration;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Notification;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use App\Notifications\ConfigurationUpdatedNotification;

class NotifyUsersThatConfigIsUpdated implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(public Configuration $configuration)
    {}

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $userIds = $this->configuration->likes->pluck('user_id');
        $users = User::whereIn('id', $userIds)->get();
        Notification::send($users, new ConfigurationUpdatedNotification($this->configuration));
    }
}

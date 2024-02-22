<?php

namespace Gtdxyz\CookieConsent;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/cookieconsent.css'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),

    new Extend\Locales(__DIR__.'/resources/locale'),

    (new Extend\ServiceProvider())
        ->register(Providers\AssetProvider::class),

    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attributes(Listeners\LoadSettingsFromDatabase::class),
];

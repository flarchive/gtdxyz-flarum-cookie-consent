<?php
namespace Gtdxyz\CookieConsent\Providers;

use Flarum\Foundation\AbstractServiceProvider;
use Flarum\Frontend\Assets;
use Flarum\Frontend\Compiler\Source\SourceCollector;

class AssetProvider extends AbstractServiceProvider
{
    public function boot()
    {
        $this->container->resolving('flarum.assets.forum', function (Assets $assets) {
            if (resolve('flarum.settings')->get('gtdxyz-cookie-consent.consentMode') == 'light') {
                $assets->css(function (SourceCollector $sources) {
                    $sources->addFile(__DIR__.'/../../resources/less/forum.less');
                });
            }
        });
    }
}

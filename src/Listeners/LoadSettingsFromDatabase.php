<?php
namespace Gtdxyz\CookieConsent\Listeners;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Settings\SettingsRepositoryInterface;

class LoadSettingsFromDatabase
{
    /**
     * @var string
     */
    protected $packagePrefix = 'gtdxyz-cookie-consent.';
    /**
     * @var array
     */
    protected $fieldsToGet = [
        'consentTitle',
        'consentText',
        'contactLink',
        'privacyLink',
        'consentMode',
    ];

    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * LoadSettingsFromDatabase constructor.
     *
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function __invoke(ForumSerializer $serializer): array
    {
        $attributes = [];

        foreach ($this->fieldsToGet as $field) {
            $value = $this->settings->get($this->packagePrefix.$field);

            if (isset($value) && !empty($value)) {
                $attributes[$this->packagePrefix.$field] = $this->settings->get($this->packagePrefix.$field);
            }
        }

        return $attributes;
    }
}

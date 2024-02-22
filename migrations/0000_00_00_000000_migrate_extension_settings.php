<?php
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        $db = $schema->getConnection();

        $keys = [
            'consentTitle'          => 'We use Cookies',
            'consentText'           => 'We use necessary cookies to make our site work. We’d like to set additional cookies to understand site usage, make site improvements and to remember your settings.',
            'contactLink'           => '#contact-link.html',
            'privacyLink'           => '#privacy-link.html',
            'consentMode'           => 'light',
        ];

        foreach ($keys as $key => $value) {
            $newKey = "gtdxyz-cookie-consent.$key";

            $db->table('settings')
                    ->insert([
                        'key'   => $newKey,
                        'value' => $value,
                    ]);
        }
    },
    'down' => function (Builder $schema) {
        // Do nothing
    },
];

import app from 'flarum/admin/app';
import CookieConsentSettingsPage from './components/CookieConsentSettingsPage';

app.initializers.add('gtdxyz-cookie-consent', () => {
  app.extensionData.for('gtdxyz-cookie-consent').registerPage(CookieConsentSettingsPage);
});

export * from './components';

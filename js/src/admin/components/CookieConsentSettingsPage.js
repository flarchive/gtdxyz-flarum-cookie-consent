import app from 'flarum/admin/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import ItemList from 'flarum/common/utils/ItemList';

export default class CookieConsentSettingsPage extends ExtensionPage {
  oninit(vnode) {
    super.oninit(vnode);

    this.setting = this.setting.bind(this);
  }

  content() {
    return [
      <div className="container">
        <div className="CookieConsentSettingsPage">
          <div className="Form">{this.settingsItems().toArray()}</div>
        </div>
      </div>,
    ];
  }

  settingsItems() {
    const items = new ItemList();

    items.add('settings-fields', <div className="Form-group">{this.settingsFields().toArray()}</div>, 100);

    items.add('submit', this.submitButton(), 0);

    return items;
  }

  settingsFields() {
    const items = new ItemList();

    items.add('configuration_title', <h2>{app.translator.trans('gtdxyz-cookie-consent.admin.settings.configuration_title')}</h2>, 110);

    items.add(
      'consentTitle',
      <div className="Form-group">
        <label>{app.translator.trans('gtdxyz-cookie-consent.admin.settings.consentTitle')}</label>
        <input required className="FormControl" bidi={this.setting('gtdxyz-cookie-consent.consentTitle')} />
      </div>,
      100
    );

    items.add(
      'consentText',
      <div className="Form-group">
        <label>{app.translator.trans('gtdxyz-cookie-consent.admin.settings.consentText')}</label>
        <textarea required className="FormControl" bidi={this.setting('gtdxyz-cookie-consent.consentText')} />
      </div>,
      100
    );

    items.add(
      'privacyLink',
      <div className="Form-group">
        <label>{app.translator.trans('gtdxyz-cookie-consent.admin.settings.privacyLink')}</label>
        <input required className="FormControl" bidi={this.setting('gtdxyz-cookie-consent.privacyLink')} />
      </div>,
      100
    );

    items.add(
      'contactLink',
      <div className="Form-group">
        <label>{app.translator.trans('gtdxyz-cookie-consent.admin.settings.contactLink')}</label>
        <input required className="FormControl" bidi={this.setting('gtdxyz-cookie-consent.contactLink')} />
      </div>,
      100
    );

    items.add('consentMode', <h2>{app.translator.trans('gtdxyz-cookie-consent.admin.settings.consentMode')}</h2>, 60);

    items.add(
      'consentMode',
      <div className="Form-group">
        {this.buildSettingComponent({
          type: 'select',
          setting: 'gtdxyz-cookie-consent.consentMode',
          label: app.translator.trans('gtdxyz-cookie-consent.admin.settings.consentMode'),
          options: {
            light: app.translator.trans('gtdxyz-cookie-consent.admin.settings.modes.light'),
            dark: app.translator.trans('gtdxyz-cookie-consent.admin.settings.modes.dark'),
          },
          required: true,
        })}
      </div>,
      50
    );

    return items;
  }

}

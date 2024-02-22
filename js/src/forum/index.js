import app from 'flarum/forum/app';
import * as CookieConsent from "vanilla-cookieconsent";

app.initializers.add('gtdxyz-cookie-consent', () => {
  $(document).ready(() => {
    const getAttribute = (key) => app.forum.attribute(`gtdxyz-cookie-consent.${key}`);
    
    let settings = {
      consentMode: getAttribute('consentMode'),
      content: {
        title: getAttribute('consentTitle'),
        message: getAttribute('consentText'),
        contact_link: getAttribute('contactLink'),
        privacy_link: getAttribute('privacyLink'),
      },
    };
    
    /**
     * All config. options available here:
     * https://cookieconsent.orestbida.com/reference/configuration-reference.html
     */
    CookieConsent.run({

      root: 'body',
      autoShow: true,
      // disablePageInteraction: true,
      // hideFromBots: true,
      mode: 'opt-in',
      // revision: 0,

      cookie: {
          name: 'cc_cookie',
          // domain: location.hostname,
          // path: '/',
          // sameSite: "Lax",
          // expiresAfterDays: 365,
      },

      // https://cookieconsent.orestbida.com/reference/configuration-reference.html#guioptions
      guiOptions: {
          consentModal: {
              layout: 'box',
              position: 'bottom left',
              equalWeightButtons: false,
              flipButtons: false
          },
          preferencesModal: {
              layout: 'box',
              equalWeightButtons: true,
              flipButtons: false
          }
      },

      // onFirstConsent: ({cookie}) => {
      //     console.log('onFirstConsent fired',cookie);
      // },

      // onConsent: ({cookie}) => {
      //     console.log('onConsent fired!', cookie)
      // },

      // onChange: ({changedCategories, changedServices}) => {
      //     console.log('onChange fired!', changedCategories, changedServices);
      // },

      // onModalReady: ({modalName}) => {
      //     console.log('ready:', modalName);
      // },

      // onModalShow: ({modalName}) => {
      //     console.log('visible:', modalName);
      // },

      // onModalHide: ({modalName}) => {
      //     console.log('hidden:', modalName);
      // },

      categories: {
          necessary: {
              enabled: true,  // this category is enabled by default
              readOnly: true  // this category cannot be disabled
          },
          analytics: {},
          ads: {}
      },

      language: {
          default: 'en',
          translations: {
              en: {
                  consentModal: {
                      title: settings.content.title,
                      description: settings.content.message,
                      acceptAllBtn: 'Accept all',
                      acceptNecessaryBtn: 'Reject all',
                      showPreferencesBtn: 'Manage Individual preferences',
                      // closeIconLabel: 'Reject all and close modal',
                      footer: `
                          <a href="` + settings.content.privacy_link + `" target="_blank">Privacy Policy</a>
                      `,
                  },
                  preferencesModal: {
                      title: 'Manage cookie preferences',
                      acceptAllBtn: 'Accept all',
                      acceptNecessaryBtn: 'Reject all',
                      savePreferencesBtn: 'Accept current selection',
                      closeIconLabel: 'Close modal',
                      serviceCounterLabel: 'Service|Services',
                      sections: [
                          {
                              title: 'Your Privacy Choices',
                              description: `In this panel you can express some preferences related to the processing of your personal information. You may review and change expressed choices at any time by resurfacing this panel via the provided link. To deny your consent to the specific processing activities described below, switch the toggles to off or use the “Reject all” button and confirm you want to save your choices.`,
                          },
                          {
                              title: 'Strictly Necessary',
                              description: 'These cookies are essential for the proper functioning of the website and cannot be disabled.',

                              //this field will generate a toggle linked to the 'necessary' category
                              linkedCategory: 'necessary'
                          },
                          {
                              title: 'Performance and Analytics',
                              description: 'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.',
                              linkedCategory: 'analytics',
                          },
                          // {
                          //     title: 'Targeting and Advertising',
                          //     description: 'These cookies are used to make advertising messages more relevant to you and your interests. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.',
                          //     linkedCategory: 'ads',
                          // },
                          {
                              title: 'More information',
                              description: 'For any queries in relation to my policy on cookies and your choices, please <a href="'+ settings.content.contact_link +'">contact us</a>'
                          }
                      ]
                  }
              }
          }
      }
    });

    // console.log(settings.consentMode);
    if(settings.consentMode == 'dark') {
        document.documentElement.classList.add('cc--darkmode');
    }

  });
});

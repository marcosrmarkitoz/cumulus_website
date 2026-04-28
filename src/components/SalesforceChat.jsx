import { useEffect } from 'react';

const SalesforceChat = () => {
  useEffect(() => {
    if (document.getElementById('sf-bootstrap-script')) {
      return;
    }

    window.initEmbeddedMessaging = function () {
      try {
        embeddedservice_bootstrap.settings.language = 'pt_BR';
        embeddedservice_bootstrap.init(
          '00DJ9000002EvTJ',
          'SDO_Messaging_for_Web',
          'https://storm-6ec90040c65995.my.site.com/ESWSDOMessagingforWeb1768924291151',
          {
            scrt2URL: 'https://storm-6ec90040c65995.my.salesforce-scrt.com'
          }
        );
      } catch (err) {
        console.error('Error loading Embedded Messaging: ', err);
      }
    };

    const script = document.createElement('script');
    script.id = 'sf-bootstrap-script';
    script.type = 'text/javascript';
    script.src = 'https://storm-6ec90040c65995.my.site.com/ESWSDOMessagingforWeb1768924291151/assets/js/bootstrap.min.js';
    script.onload = window.initEmbeddedMessaging;
    document.body.appendChild(script);
  }, []);

  return null;
};

export default SalesforceChat;

import { useEffect } from 'react';

const SALESFORCE_ORG_ID = import.meta.env.VITE_SF_ORG_ID;
const SALESFORCE_DEPLOYMENT_NAME = import.meta.env.VITE_SF_DEPLOYMENT_NAME;
const SALESFORCE_SITE_URL = import.meta.env.VITE_SF_SITE_URL;
const SALESFORCE_SCRT2_URL = import.meta.env.VITE_SF_SCRT2_URL;

const SalesforceChat = () => {
  useEffect(() => {
    if (!SALESFORCE_ORG_ID || !SALESFORCE_SITE_URL) {
      console.warn('[SalesforceChat] Missing env vars — chat disabled.');
      return;
    }

    if (document.getElementById('sf-bootstrap-script')) {
      return;
    }

    window.initEmbeddedMessaging = function () {
      try {
        embeddedservice_bootstrap.settings.language = 'pt_BR';
        embeddedservice_bootstrap.init(
          SALESFORCE_ORG_ID,
          SALESFORCE_DEPLOYMENT_NAME,
          SALESFORCE_SITE_URL,
          { scrt2URL: SALESFORCE_SCRT2_URL }
        );
      } catch (err) {
        console.error('Error loading Embedded Messaging: ', err);
      }
    };

    const script = document.createElement('script');
    script.id = 'sf-bootstrap-script';
    script.type = 'text/javascript';
    script.src = `${SALESFORCE_SITE_URL}/assets/js/bootstrap.min.js`;
    script.onload = window.initEmbeddedMessaging;
    document.body.appendChild(script);
  }, []);

  return null;
};

export default SalesforceChat;

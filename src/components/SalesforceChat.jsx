import { useEffect } from 'react';

const SalesforceChat = () => {
  useEffect(() => {
    // Configuração do Salesforce Agentforce Chat
    // IMPORTANTE: Substituir os valores abaixo pelos dados reais do seu deployment

    const SALESFORCE_CONFIG = {
      // Lê das variáveis de ambiente (prefixadas com VITE_ para Vite)
      // Se não houver .env, usa valores placeholder para desenvolvimento
      deploymentId: import.meta.env.VITE_SALESFORCE_DEPLOYMENT_ID || 'SEU_DEPLOYMENT_ID',
      orgId: import.meta.env.VITE_SALESFORCE_ORG_ID || 'SEU_ORG_ID',
      eswConfigDevName: import.meta.env.VITE_SALESFORCE_ESW_CONFIG_DEV_NAME || 'Agentforce_Chat',
      baseLiveAgentURL: import.meta.env.VITE_SALESFORCE_BASE_LIVE_AGENT_URL || 'https://d.la2-c1-ia4.salesforceliveagent.com/chat',
      eswLiveAgentDevName: import.meta.env.VITE_SALESFORCE_ESW_LIVE_AGENT_DEV_NAME || 'EmbeddedServiceLiveAgent_Parent04I...',
      baseLiveAgentContentURL: import.meta.env.VITE_SALESFORCE_BASE_LIVE_AGENT_CONTENT_URL || 'https://c.la2-c1-ia4.salesforceliveagent.com/content',
      baseCoreURL: import.meta.env.VITE_SALESFORCE_BASE_CORE_URL || 'https://sua-org.my.salesforce.com',
      scrt2URL: import.meta.env.VITE_SALESFORCE_SCRT_URL || 'https://sua-org.my.salesforce-scrt.com',

      // Customizações visuais
      brandColor: import.meta.env.VITE_CHAT_BRAND_COLOR || '#0066FF',
      buttonLabel: import.meta.env.VITE_CHAT_BUTTON_LABEL || 'Fale com nosso Agente',
      buttonIconURL: null,
      offlineSupportMinimizedText: 'Atendimento Offline',

      // Configurações de experiência
      enabledFeatures: ['LiveAgent'],
      entryFeature: 'LiveAgent',
      language: 'pt_BR',

      // Trusted URLs já configuradas no Salesforce Setup:
      // - https://seu-site.com (produção)
      // - http://localhost:5173 (desenvolvimento com Vite)
      // - *.salesforce.com
      // - *.scrt.sfdc.sh
    };

    // Função de inicialização do chat
    const initEmbeddedMessaging = () => {
      try {
        // Aguardar o carregamento do SDK do Salesforce
        if (window.embeddedservice_bootstrap) {
          const settings = {
            baseCoreURL: SALESFORCE_CONFIG.baseCoreURL,
          };

          // Configurações adicionais para Agentforce
          window.embeddedservice_bootstrap.settings = {
            language: SALESFORCE_CONFIG.language,
            hideChatButtonOnLoad: false, // Mostrar botão automaticamente
          };

          // Customização visual
          window.embeddedservice_bootstrap.settings.brandColor = SALESFORCE_CONFIG.brandColor;

          // Inicializar o serviço
          window.embeddedservice_bootstrap.init(
            SALESFORCE_CONFIG.orgId,
            SALESFORCE_CONFIG.eswConfigDevName,
            SALESFORCE_CONFIG.baseLiveAgentURL,
            {
              scrt2URL: SALESFORCE_CONFIG.scrt2URL
            }
          );

          console.log('%c[Agentforce] Chat inicializado com sucesso', 'color: #00A1E0');
        } else {
          console.warn('[Agentforce] SDK ainda não carregado, tentando novamente...');
          setTimeout(initEmbeddedMessaging, 500);
        }
      } catch (error) {
        console.error('[Agentforce] Erro ao inicializar chat:', error);
      }
    };

    // Carregar o script do Salesforce Embedded Service
    const loadSalesforceScript = () => {
      // Verificar se o script já foi carregado
      if (document.getElementById('salesforce-embedded-messaging')) {
        console.log('[Agentforce] Script já carregado');
        initEmbeddedMessaging();
        return;
      }

      const script = document.createElement('script');
      script.id = 'salesforce-embedded-messaging';
      script.type = 'text/javascript';
      script.src = `${SALESFORCE_CONFIG.baseCoreURL}/embeddedservice/5.0/esw.min.js`;

      script.onload = () => {
        console.log('[Agentforce] Script carregado');
        initEmbeddedMessaging();
      };

      script.onerror = (error) => {
        console.error('[Agentforce] Erro ao carregar script:', error);
        console.error('Verifique se o domínio está na whitelist do Salesforce (CORS e CSP)');
      };

      document.body.appendChild(script);
    };

    loadSalesforceScript();

    // Cleanup: remover listeners se necessário
    return () => {
      console.log('[Agentforce] Component unmounted');
    };
  }, []);

  // Este componente não renderiza nada visível
  // O chat é renderizado pelo SDK do Salesforce
  return null;
};

export default SalesforceChat;

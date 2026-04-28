# Guia de Implementação: Salesforce Agentforce no Site Cumulus

## 📋 Checklist de Configuração

### 1. Configuração de Segurança no Salesforce (OBRIGATÓRIO)

#### 1.1 CORS (Cross-Origin Resource Sharing)
1. Acesse: **Setup → CORS → New**
2. Adicione as seguintes URLs:

**Produção:**
```
https://seu-dominio-cumulus.com
https://www.seu-dominio-cumulus.com
```

**Desenvolvimento Local (Vite):**
```
http://localhost:5173
http://127.0.0.1:5173
```

**Staging (se houver):**
```
https://staging-cumulus.com
```

---

#### 1.2 CSP Trusted Sites (Content Security Policy)
1. Acesse: **Setup → CSP Trusted Sites → New Trusted Site**
2. Adicione:

| Nome | URL do Site | Contexto |
|------|-------------|----------|
| Cumulus Production | `https://seu-dominio-cumulus.com` | frame-src, script-src |
| Cumulus Dev | `http://localhost:5173` | frame-src, script-src |
| Salesforce CDN | `https://*.salesforce.com` | script-src, connect-src |
| Salesforce SCRT | `https://*.scrt.sfdc.sh` | script-src, connect-src |
| Live Agent | `https://*.salesforceliveagent.com` | connect-src, frame-src |

**Importante:** Marque as opções:
- ✅ Allow site for frame-src
- ✅ Allow site for script-src
- ✅ Allow site for connect-src

---

### 2. Obter o Snippet de Código do Embedded Service

#### Passo a Passo:
1. Acesse: **Setup → Embedded Service Deployments**
2. Localize seu deployment (ex: **"Agentforce_Cumulus_Chat"**)
3. Clique em **"Get Code"**
4. Copie as seguintes informações:

```javascript
// Exemplo do snippet gerado:
<script type='text/javascript' src='https://service.force.com/embeddedservice/5.0/esw.min.js'></script>
<script type='text/javascript'>
  var initESW = function(gslbBaseURL) {
    embedded_svc.settings.displayHelpButton = true;
    embedded_svc.settings.language = 'pt_BR';

    embedded_svc.settings.defaultMinimizedText = 'Atendimento Cumulus';
    embedded_svc.settings.disabledMinimizedText = 'Offline';

    embedded_svc.init(
      'https://cumulusbank.my.salesforce.com',      // ← baseCoreURL
      'https://cumulusbank.my.site.com/ESWAgentforce', // ← communityEndpointURL (se houver)
      gslbBaseURL,
      '00Dxx000000abcd',                             // ← orgId
      'Agentforce_Chat',                             // ← eswConfigDevName
      {
        baseLiveAgentContentURL: 'https://c.la2-c1-ia4.salesforceliveagent.com/content',
        deploymentId: '572xx000000001',              // ← deploymentId
        buttonId: '573xx000000002',                  // ← buttonId (opcional)
        baseLiveAgentURL: 'https://d.la2-c1-ia4.salesforceliveagent.com/chat',
        eswLiveAgentDevName: 'EmbeddedServiceLiveAgent_Parent04Ixx...',
        isOfflineSupportEnabled: false
      }
    );
  };
</script>
```

---

### 3. Configurar o Componente React

Abra o arquivo: **`src/components/SalesforceChat.jsx`**

Substitua os valores de configuração:

```javascript
const SALESFORCE_CONFIG = {
  // ✏️ PREENCHER COM OS DADOS DO SEU DEPLOYMENT
  deploymentId: '572xx000000001',  // ← Do snippet acima
  orgId: '00Dxx000000abcd',        // ← Do snippet acima
  eswConfigDevName: 'Agentforce_Chat', // ← Do snippet acima
  baseLiveAgentURL: 'https://d.la2-c1-ia4.salesforceliveagent.com/chat',
  eswLiveAgentDevName: 'EmbeddedServiceLiveAgent_Parent04Ixx...',
  baseLiveAgentContentURL: 'https://c.la2-c1-ia4.salesforceliveagent.com/content',

  // Customizações visuais da Cumulus
  brandColor: '#0066FF', // Cor principal do Cumulus
  buttonLabel: 'Fale com nosso Agente',
};
```

E no trecho de inicialização, ajuste a URL do script:

```javascript
// Linha ~95 do componente
script.src = 'https://cumulusbank.my.salesforce.com/embeddedservice/5.0/esw.min.js';
//           ↑ Substituir pelo seu domínio real

// Linha ~60
baseCoreURL: 'https://cumulusbank.my.salesforce.com',
//            ↑ Substituir pelo seu domínio real

// Linha ~67
scrt2URL: 'https://cumulusbank.my.salesforce-scrt.com'
//         ↑ Substituir pelo seu domínio SCRT
```

---

### 4. Testar Localmente

#### 4.1 Instalar dependências (se necessário)
```bash
cd cumulus_website
npm install
```

#### 4.2 Iniciar o servidor de desenvolvimento
```bash
npm run dev
```

#### 4.3 Abrir o navegador
Acesse: `http://localhost:5173`

#### 4.4 Verificar o Console do Navegador
- **Esperado:** Mensagens de inicialização do Agentforce
- **Se houver erros:**
  - `CSP violation`: Verificar CSP Trusted Sites no Salesforce
  - `CORS error`: Verificar CORS Allowed Origins no Salesforce
  - `Failed to load script`: Verificar se a URL do script está correta

---

### 5. Customização Visual (CSS Opcional)

Se precisar ajustar o estilo do chat, adicione no arquivo **`index.html`** ou em um CSS global:

```css
/* Customização do botão do chat */
.embeddedServiceHelpButton .helpButton {
  background-color: #0066FF !important;
  font-family: 'Inter', sans-serif !important;
}

/* Customização do header do chat */
.embeddedServiceSidebar .sidebarHeader {
  background-color: #0066FF !important;
}

/* Ajuste de posição (se necessário) */
.embeddedServiceHelpButton {
  bottom: 20px !important;
  right: 20px !important;
}
```

---

### 6. Deploy para Produção

Antes de fazer o deploy:

1. ✅ Verifique se a URL de produção está no CORS do Salesforce
2. ✅ Teste todas as funcionalidades do chat em staging
3. ✅ Confirme que o agente está respondendo corretamente
4. ✅ Teste o escalonamento para Omni-Channel (se configurado)

#### Build de produção:
```bash
npm run build
```

Os arquivos otimizados estarão em `dist/`

---

### 7. Monitoramento e Troubleshooting

#### Logs úteis no Console:
```javascript
// Console do navegador
[Agentforce] Script carregado
[Agentforce] Chat inicializado com sucesso
```

#### Erros comuns:

**Erro:** `embeddedservice_bootstrap is not defined`
- **Causa:** Script do Salesforce não carregou
- **Solução:** Verificar URL do script e CORS

**Erro:** `CSP violation: script-src`
- **Causa:** Domínio não está no CSP Trusted Sites
- **Solução:** Adicionar `*.salesforce.com` e `*.scrt.sfdc.sh` no CSP

**Erro:** Chat não aparece na navegação entre páginas
- **Causa:** React re-renderizando o componente
- **Solução:** O componente `<SalesforceChat />` já está no nível do `App.jsx`, então persiste entre rotas ✅

---

## 📞 Próximos Passos

1. **Obter as credenciais do Embedded Service Deployment**
2. **Configurar CORS e CSP no Salesforce**
3. **Atualizar o arquivo `SalesforceChat.jsx` com os dados reais**
4. **Testar localmente**
5. **Deploy para staging/produção**

---

## 🔗 Referências

- [Messaging for In-App and Web - Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.noversion.service_sdk_web.meta/service_sdk_web/)
- [Configure CORS for Embedded Service](https://help.salesforce.com/s/articleView?id=sf.embedded_svc_code_setup.htm)
- [CSP Trusted Sites Setup](https://help.salesforce.com/s/articleView?id=sf.csp_trusted_sites.htm)

---

**Autor:** Marcos Resende  
**Data:** 2026-04-28  
**Versão:** 1.0

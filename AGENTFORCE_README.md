# 🤖 Salesforce Agentforce - Configuração Rápida

## ✅ Status da Implementação

- ✅ Componente React criado (`SalesforceChat.jsx`)
- ✅ Integrado ao App.jsx (persiste entre rotas)
- ✅ Suporte a variáveis de ambiente
- ✅ Servidor de desenvolvimento rodando em `http://localhost:5173`
- ⏳ **Aguardando credenciais do Salesforce Embedded Service**

---

## 🚀 Próximos Passos

### 1. Obter Credenciais do Salesforce

Acesse o Salesforce Setup e siga:

1. **Setup → Embedded Service Deployments**
2. Localize o deployment: **"[NOME_DO_SEU_DEPLOY]"**
3. Clique em **"Get Code"**
4. Copie as seguintes informações do snippet gerado:

```javascript
// Valores que você precisa copiar:
orgId: '00Dxx000000abcd'           // ← Copie este valor
deploymentId: '572xx000000001'      // ← Copie este valor
eswConfigDevName: 'Agentforce_Chat' // ← Copie este valor
baseCoreURL: 'https://cumulusbank.my.salesforce.com' // ← Copie esta URL
```

---

### 2. Configurar Variáveis de Ambiente

Crie o arquivo `.env` na raiz do projeto:

```bash
cp .env.example .env
```

Edite o `.env` e preencha com os valores reais:

```bash
# Cole aqui os valores que você copiou do Salesforce
VITE_SALESFORCE_ORG_ID=00Dxx000000abcd
VITE_SALESFORCE_DEPLOYMENT_ID=572xx000000001
VITE_SALESFORCE_BASE_CORE_URL=https://cumulusbank.my.salesforce.com
VITE_SALESFORCE_SCRT_URL=https://cumulusbank.my.salesforce-scrt.com
VITE_SALESFORCE_ESW_CONFIG_DEV_NAME=Agentforce_Chat
VITE_SALESFORCE_BASE_LIVE_AGENT_URL=https://d.la2-c1-ia4.salesforceliveagent.com/chat
VITE_SALESFORCE_BASE_LIVE_AGENT_CONTENT_URL=https://c.la2-c1-ia4.salesforceliveagent.com/content
VITE_SALESFORCE_ESW_LIVE_AGENT_DEV_NAME=EmbeddedServiceLiveAgent_Parent04Ixx...
```

---

### 3. Configurar Segurança no Salesforce (OBRIGATÓRIO)

#### 3.1 CORS (Cross-Origin Resource Sharing)

**Setup → CORS → New**

Adicione:
```
http://localhost:5173          ← Para desenvolvimento local
https://seu-dominio.com        ← Para produção
https://www.seu-dominio.com    ← Para produção (com www)
```

#### 3.2 CSP Trusted Sites

**Setup → CSP Trusted Sites → New Trusted Site**

Adicione estas URLs marcando **todas as opções** (frame-src, script-src, connect-src):

| Nome | URL |
|------|-----|
| Localhost Dev | `http://localhost:5173` |
| Salesforce CDN | `https://*.salesforce.com` |
| Salesforce SCRT | `https://*.scrt.sfdc.sh` |
| Live Agent | `https://*.salesforceliveagent.com` |

---

### 4. Testar o Chat

1. **Reinicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

2. **Abra o navegador:**
   ```
   http://localhost:5173
   ```

3. **Verifique o console do navegador (F12):**
   - Deve aparecer: `[Agentforce] Chat inicializado com sucesso`
   - O botão do chat deve aparecer no canto inferior direito

4. **Teste o chat:**
   - Clique no botão do chat
   - Envie uma mensagem
   - Verifique se o agente responde

---

## 🎨 Customização Visual

### Cores da Marca Cumulus

Edite o `.env`:

```bash
VITE_CHAT_BRAND_COLOR=#0066FF          # Azul Cumulus
VITE_CHAT_BUTTON_LABEL=Fale conosco   # Texto do botão
```

### CSS Avançado (Opcional)

Para customizações mais profundas, adicione no `index.html`:

```html
<style>
  /* Botão do chat */
  .embeddedServiceHelpButton .helpButton {
    background-color: #0066FF !important;
    font-family: 'Inter', sans-serif !important;
    border-radius: 50px !important;
  }

  /* Header do chat */
  .embeddedServiceSidebar .sidebarHeader {
    background: linear-gradient(135deg, #0066FF 0%, #0052CC 100%) !important;
  }

  /* Posição do botão */
  .embeddedServiceHelpButton {
    bottom: 20px !important;
    right: 20px !important;
  }
</style>
```

---

## 🐛 Troubleshooting

### Problema: Chat não aparece

**Causa:** CORS não configurado no Salesforce

**Solução:**
1. Verifique se `http://localhost:5173` está no CORS
2. Verifique se as CSP Trusted Sites estão corretas
3. Limpe o cache do navegador (Ctrl+Shift+Del)

---

### Problema: `embeddedservice_bootstrap is not defined`

**Causa:** Script do Salesforce não carregou

**Solução:**
1. Verifique se a URL do `VITE_SALESFORCE_BASE_CORE_URL` está correta
2. Abra o console do navegador e veja o erro de carregamento
3. Confirme que o domínio está no CSP Trusted Sites

---

### Problema: `CSP violation: script-src`

**Causa:** Content Security Policy bloqueando o script

**Solução:**
1. Acesse **Setup → CSP Trusted Sites**
2. Adicione `https://*.salesforce.com` com **script-src** marcado
3. Adicione `https://*.scrt.sfdc.sh` com **script-src** marcado

---

### Problema: Chat desaparece ao navegar entre páginas

**Status:** ✅ Resolvido!

**Como foi resolvido:** O componente `<SalesforceChat />` está no nível do `App.jsx`, fora do `<Routes>`, garantindo que ele persiste durante a navegação.

---

## 📊 Monitoramento

### Logs no Console do Navegador

Mensagens esperadas:
```
[Agentforce] Script carregado
[Agentforce] Chat inicializado com sucesso
```

### Testar Integração com Omni-Channel

1. Inicie uma conversa no chat
2. Verifique se o agente responde corretamente
3. Teste o escalonamento para atendente humano (se configurado)
4. Monitore no Salesforce: **Setup → Omni-Channel Settings**

---

## 📦 Deploy para Produção

### 1. Build de Produção

```bash
npm run build
```

Os arquivos otimizados estarão em `dist/`

### 2. Adicionar Domínio de Produção no Salesforce

Antes do deploy:

1. **CORS:** Adicione `https://seu-dominio.com`
2. **CSP Trusted Sites:** Adicione `https://seu-dominio.com`
3. Teste no ambiente de staging primeiro

### 3. Deploy

Faça o deploy dos arquivos da pasta `dist/` para seu servidor/CDN.

---

## 🔗 Documentação Oficial

- [Messaging for In-App and Web](https://developer.salesforce.com/docs/atlas.en-us.noversion.service_sdk_web.meta/service_sdk_web/)
- [Embedded Service Setup Guide](https://help.salesforce.com/s/articleView?id=sf.embedded_svc_code_setup.htm)
- [CSP Trusted Sites](https://help.salesforce.com/s/articleView?id=sf.csp_trusted_sites.htm)

---

## ✉️ Suporte

**Dúvidas sobre a implementação?**

1. Verifique o arquivo `SALESFORCE_AGENTFORCE_SETUP.md` (documentação completa)
2. Consulte os logs do console do navegador
3. Entre em contato com o administrador do Salesforce

---

**Implementado por:** Marcos Resende  
**Data:** 2026-04-28  
**Versão:** 1.0

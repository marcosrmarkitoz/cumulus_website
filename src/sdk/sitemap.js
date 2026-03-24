/**
 * Salesforce Personalization Sitemap (Data Cloud SDK) - CUMULUS WEBSITE
 * 
 * Version: 2.0 (Audit Revised)
 * Language: Portuguese (Brasil)
 */

SalesforceInteractions.init({
    // 1. Consent Management (Obrigatório segundo guias)
    consents: [{
        provider: 'CumulusBanco',
        purpose: 'Rastreamento de Personalização',
        status: 'Opt In' // Default para ambiente de demonstração
    }],

    // 2. Definição do Sitemap
    siteMap: {
        dataspace: 'REPLACE_WITH_YOUR_DATASPACE_NAME', // Mapeado via SF_CONFIG
        
        // Page Types definidos conforme melhores práticas (eventType explícito)
        pageTypes: [
            {
                name: "home_page",
                isMatch: () => window.location.pathname === '/',
                interaction: {
                    name: "Visualização - Home",
                    eventType: "websiteEngagement"
                },
                contentZones: [
                    { name: "home_hero", selector: "#home-hero" },
                    { name: "home_product_recommendation", selector: "#home-product-recommendation" },
                    { name: "home_articles", selector: "#home-articles" }
                ]
            },
            {
                name: "banking_page",
                isMatch: () => /\/banking/.test(window.location.pathname),
                interaction: {
                    name: "Visualização - Banking",
                    eventType: "websiteEngagement"
                },
                contentZones: [
                    { name: "banking_hero", selector: "#banking-hero" },
                    { name: "banking_cta", selector: "#banking-cta" }
                ]
            },
            {
                name: "credit_card_page",
                isMatch: () => /\/cartoes-de-credito/.test(window.location.pathname),
                interaction: {
                    name: "Visualização - Cartões",
                    eventType: "websiteEngagement"
                },
                contentZones: [
                    { name: "credit_card_highlight", selector: "#credit-card-highlight" },
                    { name: "credit_card_carousel", selector: "#credit-card-carousel" }
                ]
            },
            {
                name: "loan_page",
                isMatch: () => /\/emprestimo/.test(window.location.pathname),
                interaction: {
                    name: "Visualização - Empréstimo",
                    eventType: "websiteEngagement"
                },
                contentZones: [
                    { name: "loan_simulator", selector: "#loan-simulator" },
                    { name: "loan_offer", selector: "#loan-offer" }
                ]
            },
            {
                name: "consortium_page",
                isMatch: () => /\/consorcio/.test(window.location.pathname),
                interaction: {
                    name: "Visualização - Consórcio",
                    eventType: "websiteEngagement"
                },
                contentZones: [
                    { name: "consortium_hero", selector: "#consortium-hero" }
                ]
            },
            {
                name: "insurance_page",
                isMatch: () => /\/seguros/.test(window.location.pathname),
                interaction: {
                    name: "Visualização - Seguros",
                    eventType: "websiteEngagement"
                },
                contentZones: [
                    { name: "insurance_products", selector: "#insurance-products" }
                ]
            },
            {
                name: "investment_page",
                isMatch: () => /\/investimento/.test(window.location.pathname),
                interaction: {
                    name: "Visualização - Investimento",
                    eventType: "websiteEngagement"
                },
                contentZones: [
                    { name: "investment_highlight", selector: "#investment-highlight" },
                    { name: "investment_calculator", selector: "#investment-calculator" }
                ]
            }
        ],

        // Zonas de Conteúdo Globais (Úteis para banners de topo e popups)
        global: {
            contentZones: [
                { name: "global_infobar", selector: "#global-infobar" },
                { name: "global_popup", selector: "#global-popup" }
            ],
            onActionEvent: (actionEvent) => {
                // Adiciona o referrer em todos os eventos
                actionEvent.attributes = actionEvent.attributes || {};
                actionEvent.attributes.referrer = document.referrer;
                return actionEvent;
            }
        }
    }
});

// 3. Inicialização de Web Templates e Engagement Destinations (Poli-fill para WPM)
SalesforceInteractions.Personalization.Config.initialize({
    customFlickerDefenseConfig: {
        redisplayTimeoutMilliseconds: 2000,
        renderPersonalizationAfterTimeoutElapsed: true
    },

    // Engagement Destinations (Para rastrear cliques/vistas de campanhas)
    customEngagementConfig: {
        destinations: [
            {
                name: "Website Engagement (Default)",
                description: "Rastreio padrão para banners e CTAs manuais",
                type: "userEngagement",
                interactionNames: {
                    view: "personalization-view",
                    click: "personalization-click"
                }
            },
            {
                name: "Engajamento com Produtos",
                description: "Rastreio para recomendações de produtos financeiros",
                type: "catalog",
                interactionNames: {
                    view: "catalog-object-view-start",
                    click: "catalog-object-click"
                }
            }
        ]
    },

    // Web Templates / Transformers (Handlebars) - PT-BR
    additionalTransformers: [
        {
            name: "Banner Principal Cumulus",
            transformerType: "Handlebars",
            substitutionDefinitions: {
                headline: { defaultValue: '[Título do Banner]' },
                subheadline: { defaultValue: '[Subtítulo]' },
                ctaText: { defaultValue: '[Texto do Botão]' },
                ctaUrl: { defaultValue: '#' },
                imageUrl: { defaultValue: '' }
            },
            transformerTypeDetails: {
                html: `
                    <div class="p13n-hero-banner" style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('{{subVar 'imageUrl'}}')">
                        <div class="p13n-content">
                            <h1>{{subVar 'headline'}}</h1>
                            <p>{{subVar 'subheadline'}}</p>
                            <a href="{{subVar 'ctaUrl'}}" class="cta-btn">{{subVar 'ctaText'}}</a>
                        </div>
                    </div>
                `
            }
        },
        {
            name: "Grade de Recomendações",
            transformerType: "Handlebars",
            substitutionDefinitions: {
                recs: { defaultValue: '[data]' },
                image: { defaultValue: '[ImageURL__c]' },
                name: { defaultValue: '[ssot__Name__c]' },
                price: { defaultValue: '[UnitPrice__c]' }
            },
            transformerTypeDetails: {
                html: `
                    <div class="p13n-recs-container">
                        <h3 class="p13n-title">Ofertas Selecionadas para Você</h3>
                        <div class="p13n-grid">
                            {{#each (subVar 'recs')}}
                                <div class="p13n-card">
                                    <img src="{{subVar 'image'}}" alt="{{subVar 'name'}}">
                                    <h4>{{subVar 'name'}}</h4>
                                    <p class="p13n-price">R$ {{subVar 'price'}}</p>
                                    <button class="p13n-btn">Saiba Mais</button>
                                </div>
                            {{/each}}
                        </div>
                    </div>
                `
            }
        }
    ]
});

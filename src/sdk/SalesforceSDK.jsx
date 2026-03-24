import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DEBUG_MODE } from '../config/salesforce';

/**
 * SalesforceSDK Component (Data Cloud Version)
 * Gerencia a reinicialização do sitemap em SPAs e helpers de rastreamento.
 */
const SalesforceSDK = () => {
    const location = useLocation();

    useEffect(() => {
        // No Data Cloud SDK, a mudança de rota em SPA deve triggerar o reinit do sitemap
        // para que a lógica de isMatch() seja re-executada e o evento de pageView seja enviado.
        if (window.SalesforceInteractions) {
            if (DEBUG_MODE) {
                console.log(`%c[Cumulus SDK] Rota alterada: ${location.pathname}. Re-inicializando Sitemap...`, 'color: #2E86C1; font-weight: bold');
            }
            
            // Re-inicializa apenas o Sitemap para capturar a nova página
            window.SalesforceInteractions.reinit({ siteMapOnly: true });
        } else {
            if (DEBUG_MODE) {
                console.warn('[Cumulus SDK] SalesforceInteractions não encontrado no window. Verifique o beacon no index.html.');
            }
        }
    }, [location.pathname]);

    return null;
};

/**
 * Helper para rastrear ações manuais (Cliques, Envios de Form)
 */
export const trackAction = (name, attributes = {}) => {
    if (DEBUG_MODE) {
        console.log(`%c[Cumulus Action] Enviando: ${name}`, 'color: #F39C12; font-weight: bold', attributes);
    }

    if (window.SalesforceInteractions) {
        window.SalesforceInteractions.sendEvent({
            interaction: {
                name: name,
                eventType: "websiteEngagement"
            },
            attributes: attributes
        });
    }
};

/**
 * Identity Helper - Captura Email para Data Cloud Profile e Identity Resolution
 * Segundo guias oficiais, deve enviar contactPointEmail e opcionalmente partyIdentification.
 */
export const trackIdentity = (email, userId = null) => {
    if (DEBUG_MODE) {
        console.log(`%c[Cumulus Identity] Capturando Identity: ${email}`, 'color: #27AE60; font-weight: bold');
    }

    if (window.SalesforceInteractions) {
        // 1. Enviar evento de Engajamento de Login
        // 2. Enviar atributos de Perfil (Email)
        const identityEvent = {
            interaction: {
                name: "Login do Usuário",
                eventType: "userEngagement"
            },
            user: {
                attributes: {
                    eventType: "contactPointEmail",
                    email: email
                }
            }
        };

        // Se tivermos um ID fixo do sistema (ex: CRM ID), enviamos partyIdentification para IR em tempo real
        if (userId) {
            identityEvent.user.attributes.partyId = userId;
            identityEvent.user.attributes.partyIdSource = "Cumulus_Core_System";
        }

        window.SalesforceInteractions.sendEvent(identityEvent);
    }
};

/**
 * Helper para disparar eventos de Catálogo (Produtos Financeiros)
 */
export const trackProductView = (productId, productName, category) => {
    if (DEBUG_MODE) {
        console.log(`%c[Cumulus Catalog] Visualizando Produto: ${productName}`, 'color: #8E44AD; font-weight: bold');
    }

    if (window.SalesforceInteractions) {
        window.SalesforceInteractions.sendEvent({
            interaction: {
                name: "Visualização de Produto Financeiro",
                eventType: "financialProductEngagement",
                catalog: {
                    type: "FinancialProduct",
                    id: productId,
                    attributes: {
                        name: productName,
                        category: category
                    }
                }
            }
        });
    }
};

export default SalesforceSDK;

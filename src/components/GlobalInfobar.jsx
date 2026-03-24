import React from 'react';

/**
 * GlobalInfobar
 * Barra de destaque no topo da página.
 * Alvo da Content Zone: global_infobar
 */
const GlobalInfobar = () => {
  return (
    <div id="global-infobar" className="global-infobar">
      {/* 
          Este conteúdo será substituído pelo Salesforce Personalization.
          O ID 'global-infobar' é o seletor mapeado no sitemap.
      */}
      <div className="infobar-default">
          Bora planejar seu futuro? Conheça nossos novos planos de investimento. 
          <a href="/investimento" className="infobar-link"> Saiba mais</a>
      </div>

      <style>{`
        .global-infobar {
          background: var(--cumulus-primary);
          color: white;
          text-align: center;
          padding: 10px 15px;
          font-size: 0.9rem;
          font-weight: 500;
          z-index: 1001;
          position: relative;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .infobar-link {
          color: var(--cumulus-accent);
          text-decoration: none;
          margin-left: 8px;
          font-weight: 700;
          transition: 0.2s;
        }
        .infobar-link:hover {
          text-decoration: underline;
          filter: brightness(1.2);
        }
        /* Estilos para quando o WPM injetar conteúdo (padrão transformer) */
        .infobar-default {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }
      `}</style>
    </div>
  );
};

export default GlobalInfobar;

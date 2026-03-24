import React from 'react';
import ContentZone from '../components/ContentZone';
import CTAButton from '../components/CTAButton';
import { Home, Car, Building2, Sun } from 'lucide-react';

const Consortium = () => {
  return (
    <div className="page">
      <ContentZone id="consortium-hero">
        <section style={{ backgroundColor: 'var(--cumulus-bg-gray)', padding: '6rem 0' }}>
          <div className="container text-center">
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Planeje sua próxima conquista sem pagar juros.</h1>
            <p style={{ color: 'var(--cumulus-primary)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 3rem', lineHeight: 1.5, fontWeight: 500 }}>
              O consórcio Cumulus é a maneira inteligente de comprar seu carro, casa ou investir no seu negócio com parcelas que cabem no bolso.
            </p>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              {[
                { icon: <Car size={32} />, title: 'Veículos' },
                { icon: <Home size={32} />, title: 'Imóveis' },
                { icon: <Building2 size={32} />, title: 'Serviços' },
                { icon: <Sun size={32} />, title: 'Energia Solar' }
              ].map((item, i) => (
                <div key={i} style={{ 
                  backgroundColor: 'white', 
                  padding: '2.5rem', 
                  borderRadius: '24px', 
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                  cursor: 'pointer',
                  border: '2px solid transparent',
                  transition: 'var(--cumulus-transition)',
                  ':hover': { borderColor: 'var(--cumulus-secondary)' }
                }} onMouseOver={e => e.currentTarget.style.borderColor = 'var(--cumulus-secondary)'} onMouseOut={e => e.currentTarget.style.borderColor = 'transparent'}>
                  <div style={{ color: 'var(--cumulus-secondary)' }}>{item.icon}</div>
                  <strong>{item.title}</strong>
                  <CTAButton variant="secondary" actionName={`consortium_select_${item.title.toLowerCase()}`} style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>Simular</CTAButton>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ContentZone>
    </div>
  );
};

export default Consortium;

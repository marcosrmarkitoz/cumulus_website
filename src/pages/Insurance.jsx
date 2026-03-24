import React from 'react';
import ContentZone from '../components/ContentZone';
import CTAButton from '../components/CTAButton';
import { Heart, Smartphone, Home, ShieldCheck } from 'lucide-react';

const Insurance = () => {
  return (
    <div className="page">
      <section style={{ backgroundColor: 'var(--cumulus-primary)', color: 'white', padding: '5rem 0' }}>
        <div className="container text-center">
          <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '1rem' }}>Tranquilidade para o que realmente importa.</h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.2rem', lineHeight: 1.5, maxWidth: '800px', margin: '0 auto' }}>
            Seguros flexíveis e digitais, sem letras miúdas. Proteção completa para o que você mais valoriza.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: 'white' }}>
        <div className="container">
          <ContentZone id="insurance-products">
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {[
                { icon: <Heart size={32} />, title: 'Vida', desc: 'Proteção financeira para quem você ama, com assistência funeral inclusa.' },
                { icon: <Smartphone size={32} />, title: 'Celular', desc: 'Cobertura contra roubo, furto qualificado e danos acidentais.' },
                { icon: <Home size={32} />, title: 'Residencial', desc: 'Proteção para sua casa contra incêndio, danos elétricos e muito mais.' },
                { icon: <ShieldCheck size={32} />, title: 'Auto', desc: 'O seguro completo para o seu veículo com assistência 24h em todo Brasil.' }
              ].map((item, i) => (
                <div key={i} style={{ 
                  padding: '3rem', 
                  borderRadius: '24px', 
                  backgroundColor: 'var(--cumulus-cloud)',
                  transition: 'var(--cumulus-transition)'
                }}>
                  <div style={{ color: 'var(--cumulus-secondary)', marginBottom: '1.5rem' }}>{item.icon}</div>
                  <h3 style={{ marginBottom: '1rem' }}>Seguro {item.title}</h3>
                  <p style={{ color: 'var(--cumulus-gray)', fontSize: '0.95rem', marginBottom: '2rem' }}>{item.desc}</p>
                  <CTAButton variant="secondary" actionName={`insurance_view_${item.title.toLowerCase()}`}>Ver coberturas</CTAButton>
                </div>
              ))}
            </div>
          </ContentZone>
        </div>
      </section>
    </div>
  );
};

export default Insurance;

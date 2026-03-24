import React from 'react';
import ContentZone from '../components/ContentZone';
import CTAButton from '../components/CTAButton';
import { Landmark, FastForward, CheckCircle2 } from 'lucide-react';

const Loans = () => {
  return (
    <div className="page">
      <ContentZone id="loan-simulator">
        <section style={{ backgroundColor: 'var(--cumulus-primary)', color: 'white', padding: '6rem 0' }}>
          <div className="container">
            <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
              <div>
                <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '1.5rem' }}>Crédito rápido para tirar seus planos do papel.</h1>
                <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.5 }}>Simule agora e receba uma proposta personalizada com as melhores taxas do mercado.</p>
                <div style={{ 
                  backgroundColor: 'white', 
                  padding: '2.5rem', 
                  borderRadius: '24px', 
                  color: 'var(--cumulus-dark)', 
                  boxShadow: 'var(--shadow-lg)' 
                }}>
                  <h3 style={{ marginBottom: '1.5rem' }}>Simulador de Empréstimo</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>QUANTO VOCÊ PRECISA?</label>
                      <input type="text" defaultValue="R$ 50.000,00" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                    </div>
                    <CTAButton actionName="loan_simulate_start" style={{ width: '100%' }}>Simular meu crédito</CTAButton>
                  </div>
                </div>
              </div>
              <div style={{ display: 'none' }} className="desktop-info">
                <style>{`@media (min-width: 1024px) { .desktop-info { display: block !important; } }`}</style>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {[
                    { icon: <FastForward size={32} />, title: 'Dinheiro na hora', desc: 'Aprovação em minutos e dinheiro na conta no mesmo dia.' },
                    { icon: <CheckCircle2 size={32} />, title: 'Taxas Justas', desc: 'Personalizamos os juros de acordo com seu perfil financeiro.' },
                    { icon: <Landmark size={32} />, title: 'Até 60 meses', desc: 'Prazos flexíveis para você pagar com tranquilidade.' }
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                      <div style={{ color: 'var(--cumulus-accent)' }}>{item.icon}</div>
                      <div>
                        <h4 style={{ color: 'white', marginBottom: '0.25rem' }}>{item.title}</h4>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </ContentZone>

      <ContentZone id="loan-offer">
        <section style={{ backgroundColor: 'white' }}>
          <div className="container text-center">
            <h2 style={{ marginBottom: '1rem' }}>Ofertas Exclusivas</h2>
            <p style={{ color: 'var(--cumulus-gray)', marginBottom: '3rem' }}>Baseado no seu histórico com a Cumulus, separamos estas condições:</p>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <div style={{ padding: '2.5rem', borderRadius: '24px', backgroundColor: 'var(--cumulus-cloud)', textAlign: 'left' }}>
                <span style={{ backgroundColor: 'var(--cumulus-secondary)', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '100px', fontSize: '0.7rem', fontWeight: 700 }}>RECOMENDADO</span>
                <h3 style={{ marginTop: '1rem' }}>Crédito Consignado</h3>
                <p style={{ margin: '1rem 0', color: 'var(--cumulus-gray)' }}>A menor taxa do mercado para aposentados e servidores.</p>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--cumulus-primary)', marginBottom: '1.5rem' }}>Taxas de 1.2% a.m.</div>
                <CTAButton variant="secondary" actionName="loan_offer_consignado">Solicitar</CTAButton>
              </div>
            </div>
          </div>
        </section>
      </ContentZone>
    </div>
  );
};

export default Loans;

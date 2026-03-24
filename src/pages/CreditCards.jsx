import React from 'react';
import ContentZone from '../components/ContentZone';
import CTAButton from '../components/CTAButton';
import { CreditCard, Zap, Gift, Wallet } from 'lucide-react';

const CreditCards = () => {
  const cards = [
    { title: 'Cumulus Free', color: 'var(--cumulus-accent)', desc: 'Zero anuidade, cashback em parceiros.' },
    { title: 'Cumulus Platinum', color: 'var(--cumulus-secondary)', desc: 'Benefícios de viagem, pontos em dobro.' },
    { title: 'Cumulus Black', color: 'var(--cumulus-dark)', desc: 'Exclusividade total e taxas de investimento VIP.' },
  ];

  return (
    <div className="page">
      <ContentZone id="credit-card-highlight">
        <section style={{ 
          backgroundColor: 'var(--cumulus-primary)', 
          color: 'white',
          padding: '5rem 0'
        }}>
          <div className="container">
            <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '4rem' }}>
              <div>
                <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '1.5rem' }}>Cartões que transformam suas compras em conquistas.</h1>
                <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem', lineHeight: 1.5 }}>Escolha o cartão que mais combina com seu estilo de vida e comece a ganhar benefícios reais hoje mesmo.</p>
                <CTAButton actionName="cards_apply_primary">Peça o seu agora</CTAButton>
              </div>
              <div style={{ position: 'relative' }}>
                <div style={{
                  width: '350px',
                  height: '220px',
                  backgroundColor: 'var(--cumulus-dark)',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: 'var(--shadow-lg)',
                  transform: 'rotate(-5deg)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Zap size={32} color="var(--cumulus-gold)" />
                    <span style={{ fontWeight: 800 }}>BC</span>
                  </div>
                  <div style={{ marginTop: '4rem' }}>
                    <div style={{ fontSize: '1.2rem', letterSpacing: '2px' }}>**** **** **** 8859</div>
                    <div style={{ marginTop: '1rem', fontSize: '0.8rem', opacity: 0.7 }}>CLIENTE CUMULUS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ContentZone>

      <section style={{ backgroundColor: 'white' }}>
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '3rem' }}>Nossos Cartões</h2>
          <ContentZone id="credit-card-carousel">
            <div className="grid" style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2.5rem'
            }}>
              {cards.map((card, i) => (
                <div key={i} style={{
                  padding: '2.5rem',
                  borderRadius: '24px',
                  border: '1px solid #eee',
                  textAlign: 'center',
                  transition: 'var(--cumulus-transition)',
                  cursor: 'pointer'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: card.color,
                    borderRadius: '16px',
                    margin: '0 auto 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    <CreditCard size={30} />
                  </div>
                  <h3 style={{ marginBottom: '1rem' }}>{card.title}</h3>
                  <p style={{ color: 'var(--cumulus-gray)', marginBottom: '1.5rem' }}>{card.desc}</p>
                  <CTAButton variant="secondary" actionName={`card_details_${card.title.toLowerCase().replace(' ', '_')}`}>Conhecer benefícios</CTAButton>
                </div>
              ))}
            </div>
          </ContentZone>
        </div>
      </section>
    </div>
  );
};

export default CreditCards;

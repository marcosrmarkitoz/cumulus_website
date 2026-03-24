import React from 'react';
import { motion } from 'framer-motion';
import ContentZone from '../components/ContentZone';
import CTAButton from '../components/CTAButton';
import { Wallet, ArrowUpRight, BarChart3, Globe } from 'lucide-react';

const Banking = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="page">
      <ContentZone id="banking-hero">
        <section style={{ backgroundColor: 'white', padding: '5rem 0' }}>
          <div className="container">
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'center', gap: '3rem' }}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>A conta digital que simplifica sua vida.</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--cumulus-primary)', marginBottom: '2rem', lineHeight: 1.5, fontWeight: 500 }}>
                  Tudo o que você precisa em um só lugar. Sem taxas escondidas, sem filas, 100% transparente.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <CTAButton actionName="banking_open_account">Abrir conta</CTAButton>
                  <CTAButton variant="secondary" actionName="banking_learn_more">Portabilidade de salário</CTAButton>
                </div>
              </motion.div>
              <motion.div 
                style={{ backgroundColor: 'var(--cumulus-cloud)', padding: '3rem', borderRadius: '24px' }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 600 }}>Saldo Disponível</span>
                    <Wallet color="var(--cumulus-secondary)" />
                  </div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>R$ 12.450,00</div>
                  <div style={{ borderTop: '1px solid #d0e1ee', paddingTop: '1.5rem', display: 'flex', gap: '2rem' }}>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--cumulus-gray)' }}>Rendimento (Mês)</div>
                      <div style={{ fontWeight: 700, color: 'var(--cumulus-success)' }}>+ R$ 112,40</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--cumulus-gray)' }}>Cashback</div>
                      <div style={{ fontWeight: 700, color: 'var(--cumulus-gold)' }}>R$ 45,90</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </ContentZone>

      <section style={{ backgroundColor: 'var(--cumulus-bg-gray)' }}>
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {[
              { icon: <ArrowUpRight />, title: 'PIX Ilimitado', desc: 'Transfira em segundos a qualquer hora.' },
              { icon: <BarChart3 />, title: 'Investimento Automático', desc: 'Seu saldo rende 100% do CDI todos os dias.' },
              { icon: <Globe />, title: 'Conta Global', desc: 'Dólar e Euro com a menor taxa do mercado.' }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}
                {...fadeInUp}
              >
                <div style={{ color: 'var(--cumulus-secondary)', marginBottom: '1rem' }}>{item.icon}</div>
                <h4 style={{ marginBottom: '0.5rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--cumulus-gray)' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banking;

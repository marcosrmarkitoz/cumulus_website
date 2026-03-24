import React from 'react';
import ContentZone from '../components/ContentZone';
import CTAButton from '../components/CTAButton';
import { TrendingUp, PieChart, Landmark, ArrowRight } from 'lucide-react';

const Investments = () => {
  return (
    <div className="page">
      <ContentZone id="investment-highlight">
        <section style={{ 
          background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '8rem 0'
        }}>
          <div className="container">
            <div style={{ maxWidth: '600px' }}>
              <h1 style={{ color: 'white', fontSize: '3.5rem', marginBottom: '1.5rem' }}>Seu futuro começa com um clique.</h1>
              <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.5 }}>
                Acesse as melhores opções de renda fixa, fundos e bolsa de valores com corretagem zero.
              </p>
              <CTAButton actionName="invest_get_started">Começar a Investir</CTAButton>
            </div>
          </div>
        </section>
      </ContentZone>

      <section style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <ContentZone id="investment-calculator" minHeight="400px" style={{ backgroundColor: 'var(--cumulus-cloud)', padding: '3rem', borderRadius: '24px' }}>
              <h3>Simulador de Investimento</h3>
              <p style={{ margin: '1rem 0 2rem 0', color: 'var(--cumulus-gray)' }}>Veja quanto seu dinheiro pode render na Cumulus.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>QUANTO QUER INVESTIR?</label>
                  <input type="text" defaultValue="R$ 10.000,00" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>POR QUANTO TEMPO?</label>
                  <select style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #ddd' }}>
                    <option>12 meses</option>
                    <option>24 meses</option>
                    <option>60 meses</option>
                  </select>
                </div>
                <CTAButton variant="secondary" actionName="invest_simulate">Simular Resultado</CTAButton>
              </div>
            </ContentZone>
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Curadoria de especialistas para todos os perfis.</h2>
              <p style={{ color: 'var(--cumulus-gray)', marginBottom: '2rem' }}>Seja você conservador ou arrojado, temos a carteira ideal para o seu momento de vida.</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ display: 'flex', gap: '1rem' }}>
                  <TrendingUp color="var(--cumulus-secondary)" />
                  <div>
                    <strong>Renda Fixa:</strong> Tesouro Direto, CDBs e LCIs com taxas imbatíveis.
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem' }}>
                  <PieChart color="var(--cumulus-secondary)" />
                  <div>
                    <strong>Fundos:</strong> Melhores gestoras do mercado em um único lugar.
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem' }}>
                  <Landmark color="var(--cumulus-secondary)" />
                  <div>
                    <strong>Bolsa:</strong> Home Broker intuitivo com corretagem zero.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investments;

import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Cloud } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--cumulus-dark)',
      color: 'white',
      padding: '4rem 0 2rem 0',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div className="grid" style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <Cloud size={32} color="var(--cumulus-accent)" />
              <span style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>Cumulus</span>
            </div>
            <p style={{ color: 'var(--cumulus-gray)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Transformando a relação das pessoas com o seu dinheiro através de tecnologia e transparência.
            </p>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Produtos</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/banking" style={{ color: '#aaa', fontSize: '0.9rem' }}>Conta Digital</Link></li>
              <li><Link to="/cartoes-de-credito" style={{ color: '#aaa', fontSize: '0.9rem' }}>Cartões de Crédito</Link></li>
              <li><Link to="/investimento" style={{ color: '#aaa', fontSize: '0.9rem' }}>Investimentos</Link></li>
              <li><Link to="/emprestimo" style={{ color: '#aaa', fontSize: '0.9rem' }}>Empréstimos</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Ajuda</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="#" style={{ color: '#aaa', fontSize: '0.9rem' }}>Canais de Atendimento</Link></li>
              <li><Link to="#" style={{ color: '#aaa', fontSize: '0.9rem' }}>Ouvidoria</Link></li>
              <li><Link to="#" style={{ color: '#aaa', fontSize: '0.9rem' }}>Segurança</Link></li>
              <li><Link to="#" style={{ color: '#aaa', fontSize: '0.9rem' }}>FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Siga-nos</h4>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ color: 'white' }}><Facebook size={20} /></a>
              <a href="#" style={{ color: 'white' }}><Instagram size={20} /></a>
              <a href="#" style={{ color: 'white' }}><Twitter size={20} /></a>
              <a href="#" style={{ color: 'white' }}><Linkedin size={20} /></a>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid #333',
          paddingTop: '2rem',
          marginTop: '3rem',
          textAlign: 'center',
          color: '#666',
          fontSize: '0.8rem'
        }}>
          <p>© 2026 Cumulus Serviços Financeiros S.A. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

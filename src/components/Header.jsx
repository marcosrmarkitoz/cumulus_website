import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogIn, Cloud } from 'lucide-react';
import LoginModal from './LoginModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Banking', path: '/banking' },
    { name: 'Cartões', path: '/cartoes-de-credito' },
    { name: 'Empréstimo', path: '/emprestimo' },
    { name: 'Consórcio', path: '/consorcio' },
    { name: 'Seguros', path: '/seguros' },
    { name: 'Investimento', path: '/investimento' },
  ];

  return (
    <header style={{
      backgroundColor: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      {/* WPM Demo Link */}
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '4px 20px',
        textAlign: 'right',
        fontSize: '11px',
        borderBottom: '1px solid #eee'
      }}>
        <a 
          href={`${window.location.origin}${window.location.pathname}?sf_personalization_wpm`} 
          style={{ color: '#2E86C1', textDecoration: 'none', fontWeight: 600 }}
        >
          🎯 Ativar Web Personalization Manager (Demo Mode)
        </a>
      </div>

      <div className="container" style={{
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Cloud size={30} color="var(--cumulus-secondary)" />
          <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--cumulus-primary)' }}>Cumulus</span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'none' }} className="desktop-nav">
          <style>{`
            @media (min-width: 1024px) {
              .desktop-nav { display: flex !important; gap: 1.5rem; }
            }
          `}</style>
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              style={{
                color: location.pathname === item.path ? 'var(--cumulus-secondary)' : 'var(--cumulus-primary)',
                fontWeight: location.pathname === item.path ? 700 : 500,
                fontSize: '0.9rem',
                transition: 'var(--cumulus-transition)'
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button 
            onClick={() => setIsLoginOpen(true)}
            style={{
              padding: '0.6rem 1.25rem',
              borderRadius: '8px',
              backgroundColor: 'var(--cumulus-primary)',
              color: 'white',
              fontWeight: 600,
              fontSize: '0.9rem'
            }}
          >
            Entrar
          </button>
          
          <button 
            style={{ display: 'block' }} 
            className="mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <style>{`
              @media (min-width: 1024px) { .mobile-toggle { display: none !important; } }
            `}</style>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          backgroundColor: 'white',
          padding: '1rem',
          boxShadow: 'var(--shadow-lg)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              style={{
                padding: '0.5rem 0',
                color: 'var(--cumulus-primary)',
                fontWeight: 600
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import { X, Mail, Lock, Loader2 } from 'lucide-react';
import CTAButton from './CTAButton';
import { trackIdentity } from '../sdk/SalesforceSDK';

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      
      // Salesforce Identity Event
      trackIdentity(email);
      
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setEmail('');
      }, 2000);
    }, 1500);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(13, 27, 42, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000,
      backdropFilter: 'blur(5px)'
    }} onClick={onClose}>
      <div style={{
        backgroundColor: 'white',
        width: '100%',
        maxWidth: '450px',
        borderRadius: '24px',
        padding: '3rem',
        position: 'relative',
        boxShadow: 'var(--shadow-lg)'
      }} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: 'var(--cumulus-gray)' }}>
          <X size={24} />
        </button>

        {!isSuccess ? (
          <>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <h2 style={{ marginBottom: '0.5rem' }}>Bem-vindo de volta</h2>
              <p style={{ color: 'var(--cumulus-gray)' }}>Entre com seus dados para acessar sua conta.</p>
            </div>

            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--cumulus-primary)' }}>E-MAIL</label>
                <div style={{ position: 'relative' }}>
                  <Mail size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--cumulus-gray)' }} />
                  <input 
                    type="email" 
                    placeholder="ex@exemplo.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ 
                      width: '100%', 
                      padding: '1rem 1rem 1rem 3rem', 
                      borderRadius: '12px', 
                      border: '1.5px solid #eee',
                      fontSize: '1rem'
                    }} 
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--cumulus-primary)' }}>SENHA</label>
                <div style={{ position: 'relative' }}>
                  <Lock size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--cumulus-gray)' }} />
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    required
                    style={{ 
                      width: '100%', 
                      padding: '1rem 1rem 1rem 3rem', 
                      borderRadius: '12px', 
                      border: '1.5px solid #eee',
                      fontSize: '1rem'
                    }} 
                  />
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <a href="#" style={{ fontSize: '0.85rem', color: 'var(--cumulus-secondary)', fontWeight: 600 }}>Esqueceu a senha?</a>
              </div>

              <CTAButton type="submit" style={{ width: '100%', marginTop: '1rem' }} disabled={isLoading}>
                {isLoading ? <Loader2 className="animate-spin" style={{ margin: '0 auto' }} /> : 'Entrar na minha conta'}
              </CTAButton>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              backgroundColor: 'var(--cumulus-success)', 
              borderRadius: '100%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
              color: 'white'
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <h2>Identificado com sucesso!</h2>
            <p style={{ color: 'var(--cumulus-gray)', marginTop: '0.5rem' }}>Enviando evento de identidade para o Data Cloud...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginModal;

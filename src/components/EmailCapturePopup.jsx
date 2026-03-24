import React, { useState, useEffect } from 'react';
import { trackIdentity, trackAction } from '../sdk/SalesforceSDK';

/**
 * EmailCapturePopup
 * Pop-up para capturar o email do usuário e unificar o perfil.
 * Alvo da Content Zone: global_popup
 */
const EmailCapturePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // 1. Mostrar após 10 segundos
    const timer = setTimeout(() => {
      if (!localStorage.getItem('cumulus_popup_seen')) {
        setIsVisible(true);
      }
    }, 10000);

    // 2. Mostrar ao dar scroll 50%
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (scrolled / height > 0.5 && !localStorage.getItem('cumulus_popup_seen')) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('cumulus_popup_seen', 'true');
    trackAction('Popup Captura Email - Fechado');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      trackIdentity(email);
      trackAction('Popup Captura Email - Submetido', { email: email });
      setSubmitted(true);
      setTimeout(() => {
        handleClose();
      }, 3000);
    }
  };

  if (!isVisible && !submitted) return <div id="global-popup"></div>;

  return (
    <div id="global-popup" className={`email-popup-overlay ${isVisible ? 'active' : ''}`}>
      <div className="email-popup-content">
        <button className="close-btn" onClick={handleClose}>×</button>
        
        {!submitted ? (
          <>
            <h3>Fique por dentro das novidades!</h3>
            <p>Receba dicas exclusivas de investimento e seguros direto no seu e-mail.</p>
            <form onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <button type="submit" className="submit-btn">Quero Receber</button>
            </form>
          </>
        ) : (
          <div className="success-msg">
            <h4>Obrigado! 🚀</h4>
            <p>Em breve você receberá nossas novidades.</p>
          </div>
        )}
      </div>

      <style>{`
        .email-popup-overlay {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 2000;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s ease;
          pointer-events: none;
        }
        .email-popup-overlay.active {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        .email-popup-content {
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.2);
          max-width: 350px;
          position: relative;
        }
        .close-btn {
          position: absolute;
          top: 10px;
          right: 15px;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #999;
        }
        h3 { color: var(--primary-color); margin-top: 0; margin-bottom: 10px; }
        p { color: #666; font-size: 0.9rem; line-height: 1.4; margin-bottom: 20px; }
        input {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 6px;
          margin-bottom: 15px;
          font-family: inherit;
        }
        .submit-btn {
          width: 100%;
          padding: 12px;
          background: var(--accent-color);
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s;
        }
        .submit-btn:hover { background: #E67E22; }
        .success-msg { text-align: center; color: var(--success-color); }
      `}</style>
    </div>
  );
};

export default EmailCapturePopup;

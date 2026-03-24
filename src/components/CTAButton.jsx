import React from 'react';
import { motion } from 'framer-motion';
import { trackAction } from '../sdk/SalesforceSDK';

const CTAButton = ({ variant = 'primary', children, onClick, actionName, ...props }) => {
  const handleClick = (e) => {
    if (actionName) {
      trackAction('clickAction', { actionName });
    }
    if (onClick) onClick(e);
  };

  const styles = {
    primary: {
      backgroundColor: 'var(--cumulus-secondary)',
      color: 'white',
      padding: '0.75rem 2rem',
      borderRadius: '8px',
      fontWeight: 600,
      fontSize: '1rem',
      boxShadow: 'var(--shadow-md)',
      transition: 'var(--cumulus-transition)',
      cursor: 'pointer'
    },
    secondary: {
      backgroundColor: 'transparent',
      color: 'var(--cumulus-secondary)',
      padding: '0.75rem 2rem',
      borderRadius: '8px',
      fontWeight: 600,
      fontSize: '1rem',
      border: '2px solid var(--cumulus-secondary)',
      transition: 'var(--cumulus-transition)',
      cursor: 'pointer'
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'white',
      padding: '0.75rem 2rem',
      borderRadius: '8px',
      fontWeight: 600,
      fontSize: '1rem',
      border: '2px solid white',
      transition: 'var(--cumulus-transition)',
      cursor: 'pointer'
    }
  };

  return (
    <motion.button 
      style={styles[variant]} 
      onClick={handleClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onMouseOver={(e) => {
        if (variant === 'primary') e.currentTarget.style.backgroundColor = 'var(--cumulus-primary)';
      }}
      onMouseOut={(e) => {
        if (variant === 'primary') e.currentTarget.style.backgroundColor = 'var(--cumulus-secondary)';
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default CTAButton;

import React from 'react';

/**
 * ContentZone Wrapper
 * A component that standardizes the HTML structure for Salesforce Personalization zones.
 * It provides a clear ID for the Sitemap to target.
 */
const ContentZone = ({ id, children, minHeight = 'auto', style = {} }) => {
  return (
    <div 
      id={id} 
      data-sf-zone={id}
      style={{ 
        minHeight,
        width: '100%',
        ...style 
      }}
    >
      {children}
    </div>
  );
};

export default ContentZone;

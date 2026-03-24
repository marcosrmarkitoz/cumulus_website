import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SalesforceSDK from '../sdk/SalesforceSDK';
import GlobalInfobar from './GlobalInfobar';
import EmailCapturePopup from './EmailCapturePopup';

const Layout = ({ children }) => {
  return (
    <>
      <SalesforceSDK />
      <GlobalInfobar />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </div>
      <EmailCapturePopup />
    </>
  );
};

export default Layout;

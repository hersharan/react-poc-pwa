import React from 'react';
import { FooterRender } from './FooterRender';

function Footer(props) {
  if (window.location.pathname === '/login' || window.location.pathname === '/reset-password' || window.location.pathname === '/confirm-password' || window.location.pathname === '/registration') {
    return null;
  }
  return (
    <footer className="footer-wrapper col-12">
      <FooterRender {...props} />
    </footer>
  )
}

export default Footer;
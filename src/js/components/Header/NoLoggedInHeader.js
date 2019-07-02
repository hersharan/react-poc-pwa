import React from 'react';

import '../../../sass/components/header.scss';
import Logo from '../../../../public/images/Logo.svg';


function NoLoggedInHeader() {

  return (
    <header className="col-12 top-header">
      <div className="logo text-center">
        <a href="/login">
          <img src={Logo} alt="Aramis and Designer Fragrances" />
        </a>
      </div>
    </header>
  )
}

export default NoLoggedInHeader;
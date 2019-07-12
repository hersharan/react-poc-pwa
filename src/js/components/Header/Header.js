import React, {useState} from 'react';

import '../../../sass/components/header.scss';
import MenuIcon from '../../../../public/images/menu.svg';
import Logo from '../../../../public/images/Logo.svg';
import { PrimaryNavigation } from '../PrimaryNavigation/PrimaryNavigation';
import { isLoggedIn } from '../../helpers/authorization';
import NoLoggedInHeader from './NoLoggedInHeader';

const menuIcon = {
  backgroundImage: `url(${MenuIcon})`,
}

function Header(props) {
  const [menu, useMenu] = useState(false);

  if (window.location.pathname === '/login' || window.location.pathname === '/reset-password' || window.location.pathname === '/confirm-password' || window.location.pathname === '/registration') {
    return null;
  }

  function handleUserProfile() {
    const uid = JSON.parse(localStorage.getItem('user')).uid;
    if (uid) {
      document.location = `/user/${uid}`;
    }
  }

  if(isLoggedIn()){
    let username;
    let uid;
    if (localStorage.getItem('user')) {
      uid = JSON.parse(localStorage.getItem('user')).uid;
      const name = JSON.parse(localStorage.getItem('user')).firstName;
      if (name && window.location.pathname === '/home') {
        username = name;
      }
    }
    return (
      <>
        <header className="col-12 top-header logged-in">
          <div className="logo">
            <a href="/home">
              <img src={Logo} alt="Aramis and Designer Fragrances" />
            </a>
          </div>
          {uid !==  0 &&
            <div className="user-icon" onClick={handleUserProfile}></div>
          }
          {username &&
            <p className="welcome-msg">Welcome, {username}</p>
          }
          {/* <div className="toggle-bar" onClick={() => useMenu(!menu)}>
            <div className="icon" style={menuIcon}></div>
          </div> */}
        </header>
        <PrimaryNavigation show={menu} />
      </>
    )
  }
  else {
    return <NoLoggedInHeader/>
  }
}

export default Header;
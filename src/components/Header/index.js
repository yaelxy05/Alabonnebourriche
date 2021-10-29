// == Import npm
import React from 'react';
// == Import components
import Nav from './Nav';

// == Import
import './header.scss';
// == Import img
import logo from '../../assets/img/logo-bonne-bourriche-v3.png';
// == Composant
const Header = () => (
  <div className="header">
    <Nav />
    <div className="header_picture--button">
      <img className="header_logo" src={logo} alt="logo bonne bourriche" />
      <button className="header_button">Découvrez notre carte</button>
    </div>
  </div>
);

// == Export
export default Header;

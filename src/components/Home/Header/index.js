// == Import npm
import React from 'react';
import { NavLink } from "react-router-dom";
// == Import components


// == Import
import './header.scss';
// == Import img
import logo from '../../../assets/img/logo-bonne-bourriche-v3.png';
// == Composant
const Header = () => (
  <div className="header">
    <div className="header_picture--button">
      <img className="header_logo" src={logo} alt="logo bonne bourriche" />
      <button className="header_button"><NavLink exact to="/notre-carte" activeClassName="current">Découvrez notre carte</NavLink></button>
    </div>
  </div>
);

// == Export
export default Header;

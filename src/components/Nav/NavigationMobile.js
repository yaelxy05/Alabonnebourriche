import React, { useState } from "react";
// == Import img
import logo from '../../assets/img/logo-bonne-bourriche-v3.png';
import NavLinksMobile from "./NavLinksMobile";
// == Import
import "./nav.scss";

const MobileNavigation = ({isLogged ,handleLogout,toggleMenu, isShow}) => {

  return (
    <div className="nav_mobile">
      <h1>A la bonne bourriche</h1>
      <div
        className={isShow ? "nav_burger-icon--open" : "nav_burger-icon"}
        onClick={toggleMenu}
      >
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </div>

      <div className={isShow ? "actived" : "header_nav-mobile"}>
        <ul className="header_link">
          {isShow && (
            <NavLinksMobile isLogged={isLogged} handleLogout={handleLogout} toggleMenu={toggleMenu} isShow={isShow}/>
          )}
        </ul>
      </div>
    </div>
  );
};

// == Export
export default MobileNavigation;

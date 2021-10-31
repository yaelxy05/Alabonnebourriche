import React, { useState } from "react";
// == Import img
import logo from '../../assets/img/logo-bonne-bourriche-v3.png';
import NavLinksMobile from "./NavLinksMobile";
// == Import
import "./nav.scss";

const MobileNavigation = () => {
  // function for activate and deactivate the burger menu
  const [toggle, setToggle] = useState(false);
  const changeState = () => {
    //console.log(e.target.value);
    setToggle(!toggle);
  };
  // function that closes the burger menu after clicking
  const closeMobileMenu = () => setToggle(false);
  return (
    <div className="nav_mobile">
      <h1>A la bonne bourriche</h1>
      <div
        className={toggle ? "nav_burger-icon--open" : "nav_burger-icon"}
        onClick={changeState}
      >
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </div>

      <div className={toggle ? "actived" : "header_nav-mobile"}>
        <ul className="header_link">
          {toggle && (
            <NavLinksMobile isMobile={true} closeMobileMenu={closeMobileMenu} />
          )}
        </ul>
      </div>
    </div>
  );
};

// == Export
export default MobileNavigation;

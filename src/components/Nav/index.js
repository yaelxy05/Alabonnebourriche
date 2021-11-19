// == Import npm
import React from "react";
import NavigationDesktop from "./NavigationDesktop";
import MobileNavigation from "./NavigationMobile";
// == Composant
const Nav = ({  handleLogout, isLogged, toggleMenu, isShow}) => {
  return (
    <div className="nav">
      <NavigationDesktop isLogged={isLogged} handleLogout={handleLogout}/>
      <MobileNavigation isLogged={isLogged} handleLogout={handleLogout} toggleMenu={toggleMenu} isShow={isShow}/>
    </div>
  );
};

// == Export
export default Nav;

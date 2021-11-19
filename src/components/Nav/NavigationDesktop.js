// == Import npm
import React from "react";
import NavLinksDesktop from "./NavLinksDesktop";
// == Composant
const NavigationDesktop = ({isLogged, handleLogout}) => {
  return (
    <div className="nav_desktop">
      <NavLinksDesktop isLogged={isLogged} handleLogout={handleLogout}/>
    </div>
  );
  
};

// == Export
export default NavigationDesktop;

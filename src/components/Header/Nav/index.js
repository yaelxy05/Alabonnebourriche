// == Import npm
import React from "react";
import NavigationDesktop from "./NavigationDesktop";
import MobileNavigation from "./NavigationMobile";
// == Composant
const Nav = () => {
  return (
    <div className="nav">
      <NavigationDesktop />
      <MobileNavigation />
    </div>
  );
};

// == Export
export default Nav;

// == Import npm
import React from 'react';


// == Composant
const Nav = () => (
  <div className="nav">
    <ul className="nav_menuLeft">
      <li>Accueil</li>
      <li>Le restaurant</li>
      <li>Nous trouver</li>
    </ul>
    <h1>A la bonne bourriche</h1>
    <ul className="nav_menuRight">
      <li>Réservation</li>
      <li>S'inscrire</li>
      <li>Se connecter</li>
    </ul>
  </div>
);

// == Export
export default Nav;

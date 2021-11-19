import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// == Import
import "./navDesktop.scss";

const NavLinksDesktop = ({ handleLogout, isLogged }) => {
  return (
    <>
      <ul className="nav_menuLeft">
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <NavLink exact to="/" activeClassName="current-home">
            Accueil
          </NavLink>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <NavLink exact to="/restaurant" activeClassName="current">
            Le restaurant
          </NavLink>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <NavLink exact to="/nous-trouver" activeClassName="current">
            Nous trouver
          </NavLink>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <NavLink exact to="/notre-carte" activeClassName="current">
            Notre carte
          </NavLink>
        </li>
      </ul>
      <h1>A la bonne bourriche</h1>
      <ul className="nav_menuRight">
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <NavLink exact to="/reservation" activeClassName="current">
            Réservation
          </NavLink>
        </li>
        {isLogged && (
          <>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
              <NavLink exact to="/espace-utilisateur" activeClassName="current">
                Espace utilisateur
              </NavLink>
            </li>
            <button
              type="button"
              className="button_logged"
              onClick={handleLogout}
            >
              Déconnexion
            </button>
          </>
        )}
        {!isLogged && (
          <>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
              <NavLink exact to="/inscription" activeClassName="current">
                S'inscrire
              </NavLink>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
              <NavLink exact to="/connexion" activeClassName="current">
                Se connecter
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </>
  );
};

// == Export
export default NavLinksDesktop;

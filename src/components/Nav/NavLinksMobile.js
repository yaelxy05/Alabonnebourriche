import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// == Import
import "./navMobile.scss";

const NavLinksMobile = ( { isLogged, toggleMenu, isShow }) => {

  return (
    <>
      

      {isShow && (
        <>
        <h1>A la bonne bourriche</h1>
        <li onClick={toggleMenu}>
          <NavLink exact to="/" activeClassName="current-home">
            Accueil
          </NavLink>
        </li>
        <li onClick={toggleMenu}>
          <NavLink exact to="/restaurant" activeClassName="current">
            Le restaurant
          </NavLink>
        </li>
        <li onClick={toggleMenu}>
          <NavLink exact to="/nous-trouver" activeClassName="current">
            Nous trouver
          </NavLink>
        </li>
        <li onClick={toggleMenu}>
          <NavLink exact to="/notre-carte" activeClassName="current">
            Notre carte
          </NavLink>
        </li>
        <li onClick={toggleMenu}>
          <NavLink exact to="/reservation" activeClassName="current">
            Réservation
          </NavLink>
        </li>
        {isLogged && (
          <li onClick={toggleMenu}>
            <NavLink exact to="/espace-utilisateur" activeClassName="current">
              Espace utilisateur
            </NavLink>
          </li>
        )}
        {!isLogged && (
          <>
            <li onClick={toggleMenu}>
              <NavLink exact to="/inscription" activeClassName="current">
                S'inscrire
              </NavLink>
            </li>
            <li onClick={toggleMenu}>
              <NavLink exact to="/connexion" activeClassName="current">
                Se connecter
              </NavLink>
            </li>
          </>
          )}
          </>
      )}
      
    </>
  );
};

// == Export
export default NavLinksMobile;

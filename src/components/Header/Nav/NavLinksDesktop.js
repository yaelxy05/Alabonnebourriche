import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// == Import
import "./navDesktop.scss";

const NavLinksDesktop = (props) => {
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
      </ul>
      <h1>A la bonne bourriche</h1>
      <ul className="nav_menuRight">
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <NavLink exact to="/reservation" activeClassName="current">
            Réservation
          </NavLink>
        </li>
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
      </ul>
    </>
  );
};

// == Export
export default NavLinksDesktop;

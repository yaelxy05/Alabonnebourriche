// == Import npm
import React from "react";
import { NavLink } from "react-router-dom";
// == Import components

// == Import
import "./restaurant.scss";
// == Import img
import RestaurantExt from "../../assets/img/resto-exterieur1.jpg";
// == Composant
const Restaurant = () => (
  <div className="restaurant">
    <h1>Le restaurant</h1>
    <div className="restaurant_presentation">
      <div className="restaurant_picture_box">
        <img src={RestaurantExt} alt="terrasse de restaurant" />
      </div>

      <div className="restaurant_description">
        <p>
          La bonne bourriche est située en bord de mer a 2 pas du port. <br />{" "}
          <br />
          Venez savourez de délicieux plateaux de fruits de mer, accompagnés
          d'un pain de seigle préparé avec soin par notre boulanger du village.
        </p>
        <button><NavLink exact to="/reservation" activeClassName="current">Réservez une table</NavLink></button>
      </div>
    </div>
  </div>
);

// == Export
export default Restaurant;

// == Import npm
import React from 'react';
// == Import components


// == Import
import './restaurant.scss';
// == Import img
import TableRestaurant from "../../assets/img/carlos-lindner-sjBYA8dAw54-unsplash.jpg";
// == Composant
const Restaurant = () => (
  <div className="restaurant">
    <h1>Le restaurant</h1>
    <div className="restaurant_presentation">
      <img src={TableRestaurant} alt="table de restaurant" />
      <div className="restaurant_description">
      <p>
        La bonne bourriche est située en bord de mer a 2 pas du port. <br/> <br/>
        Venez savourez de délicieux plateaux de fruits de mer, accompagnés d'un pain de seigle préparé avec soin par notre boulanger du village.</p>
      <button>Réservez une table</button>
      </div>
    </div>
  </div>
);

// == Export
export default Restaurant;

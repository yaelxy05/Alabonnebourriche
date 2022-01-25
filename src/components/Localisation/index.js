// == Import npm
import React from 'react';
// == Import components
import GoogleMap from './GoogleMap';

// == Import
import './localisation.scss';
// == Import img

// == Composant
const Localisation = () => {
  return (
    <div className="localisation">
      <h1>Nous trouver</h1>
      <div className="localisation_map">
      <GoogleMap />
      </div>
    </div>
  );
 }

// == Export
export default Localisation;

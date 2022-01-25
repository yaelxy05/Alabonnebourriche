// == Import npm
import React from "react";
// == Import img
import logo from "../../assets/img/logo-bonne-bourriche-v3.png";
// == Import
import "./footer.scss";

// == Composant
const Footer = () => (
  <div className="footer">
    <div className="footer_wrapper">
      <div className="footer_info">
        <div className="footer_horaire" id="footer_description">
          <h3>Notre Restaurant</h3>
          <p>
            Face à la mer et ses palmiers, le restaurant a la bonne bourriche
            vous propose un lieu de prestige afin d'émerveiller vos papilles
            avec des spécialités de la mer.
          </p>
        </div>
        <div className="footer_horaire">
          <h3>Horaires</h3>
          <p>Du lundi au samedi de 12h à 14h et de 19h30 à 23h00</p>
        </div>
        <div className="footer_horaire">
          <h3>Adresse</h3>
          <p>
            9 rue des pêcheurs de moules <br />
            13202 Cassis
            <br />
            Téléphone : 04.92.69.54.36
          </p>
        </div>
        <div className="footer_horaire">
          <h3>Nous Contacter</h3>
          <p>
            Email: labonnebourriche@mail.com <br />
            
            Téléphone : 04.92.69.54.36
          </p>
        </div>
      </div>
    </div>
  </div>
);

// == Export
export default Footer;

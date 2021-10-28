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
      <img src={logo} alt="logo a la bonne bourriche" />
      <div className="footer_horaire">
        <h3>Horaires</h3>
        <p>Lun : 12h00 - 15h00 / 19h00 - 22h00</p>
        <p>Lun : 12h00 - 15h00 / 19h00 - 22h00</p>
        <p>Lun : 12h00 - 15h00 / 19h00 - 22h00</p>
        <p>Lun : 12h00 - 15h00 / 19h00 - 22h00</p>
        <p>Lun : 12h00 - 15h00 / 19h00 - 22h00</p>
        <p>Lun : 12h00 - 15h00 / 19h00 - 22h00</p>
        <p>Lun : 12h00 - 15h00 / 19h00 - 22h00</p>
      </div>
      <div className="footer_address">
        <h3>Adresse</h3>
        <p>9 rue des pêcheurs de moules <br/>13202 Cassis</p>
      </div>
    </div>
  </div>
);

// == Export
export default Footer;

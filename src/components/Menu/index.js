// == Import npm
import React from "react";
// == Import components

// == Import
import "./menu.scss";
// == Import img ==
// == Entree
import Entree1 from "../../assets/img/pexels-ruslan-khmelevsky-7655064.jpg";
// == Plateaux
import Plateaux1 from "../../assets/img/plateaux1.jpg";
// == Plats chauds 
import GambasArmoricaine from "../../assets/img/gambas-armoricaine.jpg";
// == Composant
const Menu = () => (
  <div className="menu">
    <h1>Notre carte</h1>
    <div className="menu_wrapper">
      <div className="menu_box">
        <h2>Nos entrées</h2>
        <div className="menu_description">
          <img src={Entree1} alt="salade de poulpe" />
          <div className="menu_information">
            <p className="menu_information--title">Salade de poulpe à la provençale</p>
            <p className="menu_information--description">Mélange de poulpe avec sa vinaigrette de xersès parsement de croûtons frottés à l'ail</p>
            <p className="menu_information--price">18 €</p>
          </div>
        </div>
      </div>
      <div className="menu_box">
        <h2>Nos plateaux de fruits de mer</h2>
        <div className="menu_description">
          <img src={Plateaux1} alt="plateaux d'huîtres" />
          <div className="menu_information">
            <p className="menu_information--title">Plateaux du moussaillon</p>
            <p className="menu_information--description">12 huîtres de marène d'olérons fine de claire</p>
            <p className="menu_information--price">25 €</p>
          </div>
        </div>
      </div>
      <div className="menu_box">
        <h2>Nos plats chauds</h2>
        <div className="menu_description">
          <img src={GambasArmoricaine} alt="Gambas à l'armoricaine" />
          <div className="menu_information">
            <p className="menu_information--title">Gambas à l'armoricaine</p>
            <p className="menu_information--description">Gambas à l'armoricaine avec sa note de paprika et de safran</p>
            <p className="menu_information--price">35 €</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// == Export
export default Menu;

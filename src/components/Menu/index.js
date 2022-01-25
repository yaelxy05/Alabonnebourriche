// == Import npm
import React from "react";
// == Import components

// == Import
import "./menu.scss";
// == Import img ==
// == Entree
import Entree1 from "../../assets/img/pexels-ruslan-khmelevsky-7655064.jpg";
import Entree2 from "../../assets/img/saladeterreetmer.jpg";
// == Plateaux
import Plateaux1 from "../../assets/img/plateaux1.jpg";
import Plateaux2 from "../../assets/img/plateaudelafregate.jpg";
import Plateaux3 from "../../assets/img/plateau3.jpg";
import Plateaux4 from "../../assets/img/plateau4.jpg";
import Plateaux5 from "../../assets/img/plateau5.jpg";

// == Plats chauds
import GambasArmoricaine from "../../assets/img/gambas-armoricaine.jpg";
import CassoletteCoquillage from "../../assets/img/Queue-de-langouste.jpg";
// == Composant
const Menu = () => (
  <div className="menu">
    <h1>Notre carte</h1>
    <div className="menu_wrapper">
      <div className="menu_box">
        <h2>Nos entrées</h2>
        <div className="menu_description">
          <img src={Entree2} alt="salade de poulpe" />
          <div className="menu_information">
            <p className="menu_information--title">Salade terre et mer</p>
            <p className="menu_information--description">
              Salade avec son saumon fumé et ses petits légumes
            </p>
            <p className="menu_information--price">22 €</p>
          </div>
        </div>
        <div className="menu_description">
          <img src={Entree1} alt="salade de poulpe" />
          <div className="menu_information">
            <p className="menu_information--title">
              Salade de poulpe à la provençale
            </p>
            <p className="menu_information--description">
              Mélange de poulpe avec sa vinaigrette de xersès parsement de
              croûtons frottés à l'ail
            </p>
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
            <p className="menu_information--description">
              12 huîtres de marène d'olérons fine de claire
            </p>
            <p className="menu_information--price">25 €</p>
          </div>
        </div>
        <div className="menu_description">
          <img src={Plateaux2} alt="plateaux d'huîtres" />
          <div className="menu_information">
            <p className="menu_information--title">Plateaux de la frégate</p>
            <p className="menu_information--description">
              12 huîtres de marène d'olérons fine de claire et son homard et ses
              langoustines
            </p>
            <p className="menu_information--price">45 €</p>
          </div>
        </div>
        <div className="menu_description">
          <img src={Plateaux3} alt="plateaux d'huîtres" />
          <div className="menu_information">
            <p className="menu_information--title">Plateaux le royal</p>
            <p className="menu_information--description">
              1 homard 2 touteaux et ses croutons d'aioli
            </p>
            <p className="menu_information--price">25 €</p>
          </div>
        </div>
        <div className="menu_description">
          <img src={Plateaux4} alt="plateaux d'huîtres" />
          <div className="menu_information">
            <p className="menu_information--title">Plateaux du corsaire</p>
            <p className="menu_information--description">
            36 huîtres et sa ribanbelle de crevettes
            </p>
            <p className="menu_information--price">80 €</p>
          </div>
        </div>
        <div className="menu_description">
          <img src={Plateaux5} alt="plateaux d'huîtres" />
          <div className="menu_information">
            <p className="menu_information--title">Plateaux des incas</p>
            <p className="menu_information--description">
              1 homard et ses poissons grillé et son mais
            </p>
            <p className="menu_information--price">75 €</p>
          </div>
        </div>
      </div>
      <div className="menu_box">
        <h2>Nos plats chauds</h2>
        <div className="menu_description">
          <img src={GambasArmoricaine} alt="Gambas à l'armoricaine" />
          <div className="menu_information">
            <p className="menu_information--title">Gambas à l'armoricaine</p>
            <p className="menu_information--description">
              Gambas à l'armoricaine avec sa note de paprika et de safran
            </p>
            <p className="menu_information--price">35 €</p>
          </div>
        </div>
        <div className="menu_description">
          <img src={CassoletteCoquillage} alt="Cassolette de Coquillage" />
          <div className="menu_information">
            <p className="menu_information--title">Cassolette de Coquillage</p>
            <p className="menu_information--description">
              Cassolette de Coquillage avec sa note de paprika et de safran
            </p>
            <p className="menu_information--price">25 €</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// == Export
export default Menu;

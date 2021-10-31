// == Import npm
import React from "react";
import Header from "./Header";
// == Import
import "./home.scss";
// == Import img
import SeafoodPlatter from "../../assets/img/pexels-奥尼尔-孙-2871757.jpg";

// == Composant
const Home = () => (
  <>
    <Header />
    <div className="home">
      <h1>
        <span>
          Restaurant <br />
        </span>
        a la bonne bourriche
      </h1>
      <div className="home_wrapper">
        <img src={SeafoodPlatter} alt="Plateau de fruits de mer" />
        <div className="text_wrapper">
          <p>
            Face à la mer et ses palmiers, le restaurant a la bonne bourriche
            vous propose un lieu de prestige afin d'émerveiller vos papilles
            avec des spécialités de la mer.
            <br />
            <br />
            Notre restaurant se situe sur le port de Cassis et vous accueille
            dans une ambiance festive et conviviale.
            <br />
            <br />
            Envie d'une délicieuse dégustation de coquillages et crustacés ?
            C'est l'adresse idéale ! Découvrez vite notre carte et réservez.
          </p>
          <button>Réservez une table</button>
        </div>
      </div>
    </div>
  </>
);

// == Export
export default Home;

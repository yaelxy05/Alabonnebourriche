// == Import npm
import React from 'react';
// == Import components


// == Import
import './register.scss';
// == Import img

// == Composant
const Register = () => {
  return (
    <div className="Inscription">
      <h1>Inscription</h1>
      <div className="Inscription_wrapper">
        <form action="">
          <div className="Inscription_input">
            <label>Email</label>
            <input type="email" placeholder="Votre email" />
          </div>
          <div className="Inscription_input">
            <label>Mot de passe</label>
            <input type="password" placeholder="Votre mot de passe" />
          </div>
          <div className="Inscription_input">
            <label>Confirmez le mot de passe</label>
            <input type="password" placeholder="Votre mot de passe" />
          </div>
          <div className="Inscription_input">
            <label>Téléphone</label>
            <input type="text" placeholder="Votre téléphone" />
          </div>
          <div className="Inscription_input">
            <label>Adresse</label>
            <input type="text" placeholder="Votre adresse" />
          </div>
          <div className="button_submit">
            <button type="submit" className="Inscription_button">
              S'inscrire
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// == Export
export default Register;

// == Import npm
import React from "react";
// == Import components

// == Import
import "./login.scss";
// == Import img

// == Composant
const Login = () => {
  return (
    <div className="login">
      <h1>Connexion</h1>
      <div className="login_wrapper">
        <form action="">
          <div className="login_input">
            <label>Email</label>
            <input type="text" placeholder="Votre email" />
          </div>
          <div className="login_input">
            <label>Mot de passe</label>
            <input type="password" placeholder="Votre mot de passe" />
          </div>
          <div className="button_submit">
            <button type="submit" className="login_button">
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// == Export
export default Login;

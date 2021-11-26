// == Import npm
import React from "react";

// == Import components
import PropTypes from "prop-types";
import LoginField from "./LoginField";
// == Import
import "./login.scss";
// == Import img

// == Composant
const Login = ({
  username,
  password,
  changeField,
  handleLogin,
  isLogged,
  loggedMessage,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };
  
  return (
    <div className="login">
      <h1>Connexion</h1>
      <div className="login_wrapper">
        {isLogged && (
          <div className="login-form--logged">
            <p className="login-form--message">{loggedMessage}</p>
          </div>
        )}
        {!isLogged && (
          <form action="" onSubmit={handleSubmit}>
            <LoginField
              name="username"
              placeholder="Adresse Email"
              manageChange={changeField}
              value={username}
            />
            <LoginField
              name="password"
              type="password"
              placeholder="Mot de passe"
              manageChange={changeField}
              value={password}
            />
            <div className="button_submit">
              <button type="submit" className="login_button">
                Se connecter
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
Login.propTypes = {
  /** value for the email */
  username: PropTypes.string.isRequired,
  /** value for the password */
  password: PropTypes.string.isRequired,
  /** called when onChange event is received by an input, two parameters :
   * - new value
   * - name
   */
  changeField: PropTypes.func.isRequired,
  /** called when the form is submitted */
  handleLogin: PropTypes.func.isRequired,
  /** called when the "Déconnexion" button is clicked */
  //handleLogout: PropTypes.func.isRequired,
  /** toggle between "connected" or "not connected" */
  isLogged: PropTypes.bool,
  /** message displayed when "connected" */
  loggedMessage: PropTypes.string,
};

Login.defaultProps = {
  isLogged: false,
  loggedMessage: "Vous êtes bien connecté!",
};

// == Export
export default Login;

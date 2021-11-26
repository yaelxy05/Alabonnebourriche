// == Import npm
import React from "react";
// == Import components
import RegisterField from "./RegisterField";
import PropTypes from 'prop-types';
// == Import
import "./register.scss";
// == Import img

// == Composant
const Register = ({
  email,
  password,
  name,
  nameFirst,
  confirmPassword,
  address,
  phoneNumber,
  changeFieldRegister,
  handleRegister,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegister();
  };
  return (
    <div className="Inscription">
      <h1>Inscription</h1>
      <div className="Inscription_wrapper">
        <form action="" onSubmit={handleSubmit}>
          <RegisterField
            name="email"
            placeholder="Adresse Email"
            manageChange={(value, identifier) =>
              changeFieldRegister(value, identifier)
            }
            value={email}
          />
          <RegisterField
            name="name"
            placeholder="Nom"
            manageChange={(value, identifier) =>
              changeFieldRegister(value, identifier)
            }
            value={name}
          />
          <RegisterField
            name="nameFirst"
            placeholder="Prénom"
            manageChange={(value, identifier) =>
              changeFieldRegister(value, identifier)
            }
            value={nameFirst}
          />
          <RegisterField
            name="password"
            type="password"
            placeholder="Mot de passe"
            manageChange={(value, identifier) =>
              changeFieldRegister(value, identifier)
            }
            value={password}
          />
          <RegisterField
            name="confirmPassword"
            type="password"
            placeholder="Confirmer le mot de passe"
            manageChange={(value, identifier) =>
              changeFieldRegister(value, identifier)
            }
            value={confirmPassword}
          />
          <RegisterField
            name="phoneNumber"
            placeholder="N° de téléphone"
            manageChange={(value, identifier) =>
              changeFieldRegister(value, identifier)
            }
            value={phoneNumber}
          />
          <RegisterField
            name="address"
            placeholder="Adresse"
            manageChange={(value, identifier) =>
              changeFieldRegister(value, identifier)
            }
            value={address}
          />
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
Register.propTypes = {
  /** value for the email */
  email: PropTypes.string.isRequired,
  /** value for the password */
  password: PropTypes.string.isRequired,
  /** called when onChange event is received by an input, two parameters :
   * - new value
   * - name
   */
  /** value for the firstName */
  name: PropTypes.string.isRequired,
  changeFieldRegister: PropTypes.func.isRequired,
  /** called when the form is submitted */
  handleRegister: PropTypes.func.isRequired,
  /** value for the email */
  confirmPassword: PropTypes.string.isRequired,
  /** value for the email */
  address: PropTypes.string.isRequired,
  /** value for the email */
  phoneNumber: PropTypes.string.isRequired,
  /** value for the email */
};
Register.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};
// == Export
export default Register;

// == Import npm
import React, { useState, useEffect } from "react";

// == Import components
import RegisterField from "./RegisterField";
import PropTypes from "prop-types";
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
  messagesError,
  signupError,
}) => {
  let errorsObj = {
    email: "",
    password: "",
    name: "",
    address: "",
    nameFirst: "",
    phoneNumber: "",
    confirmPassword: "",
  };
  const [errors, setErrors] = useState(errorsObj);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegister();
    let error = false;

    const errorObj = { ...errorsObj };
    if (email === "") {
      errorObj.email = "L'email est requis.";
      error = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errorObj.email = "l'email n'est pas valide.";
    } else if (email.length < 4) {
      errorObj.email = "Le champ email est trop court.";
      error = true;
    } else if (messagesError) {
      errorObj.email = "Il y a déjà un compte avec cette email.";
      error = true;
    } else if (email.length > 4 && /\S+@\S+\.\S+/.test(email) && email !== "") {
      setSuccess(true);
    }

    if (password === "") {
      errorObj.password = "Le mot de passe est requis.";
      error = true;
    } else if (password.length < 6) {
      errorObj.password = "Le mot de passe doit contenir minimum 6 caractères.";
      error = true;
    } else if (password !== confirmPassword) {
      errorObj.password = "Les champs mot de passe doivent être identique.";
      error = true;
    } else if (
      password === confirmPassword &&
      password !== "" &&
      password.length > 6
    ) {
      setSuccess(true);
    }
    if (name === "") {
      errorObj.name = "Le nom est requis.";
      error = true;
    } else if (name.length < 2) {
      errorObj.name = "Le nom doit contenir minimum 6 caractères.";
      error = true;
    }
    else if (!/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(name)) {
      errorObj.name = "Le nom ne doit pas contenir de chiffres.";
      error = true;
    }
    else {
      setSuccess(true);
    }
    if (address === "") {
      errorObj.address = "L'adresse est requise.";
      error = true;
    } else {
      setSuccess(true);
    }
    if (phoneNumber === "") {
      errorObj.phoneNumber = "Le numéros de téléphone est requis.";
      error = true;
    } else if (
      !/^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/.test(
        phoneNumber
      )
    ) {
      errorObj.phoneNumber = "Veuillez saisir un numéros de téléphone valide";
      error = true;
    } else {
      setSuccess(true);
    }
    if (nameFirst === "") {
      errorObj.nameFirst = "Le prénom est requis.";
      error = true;
    } else if (nameFirst.length < 2) {
      errorObj.nameFirst = "Le prénom doit contenir minimum 6 caractères.";
      error = true;
    }
    else if (!/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(nameFirst)) {
      errorObj.nameFirst = "Le nom ne doit pas contenir de chiffres.";
      error = true;
    }else {
      setSuccess(true);
    }
    setErrors(errorObj);
  };
  useEffect(() => {
    signupError([]);
  }, []);

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
            errors={errors.email}
            success={success}
          />
          {errors.email && <div className="signup__error">{errors.email}</div>}
          <RegisterField
            name="name"
            placeholder="Nom"
            manageChange={(value, identifier) =>
              changeFieldRegister(value, identifier)
            }
            value={name}
            errors={errors.name}
            success={success}
          />
          {errors.name && <div className="signup__error">{errors.name}</div>}
          <RegisterField
            name="nameFirst"
            placeholder="Prénom"
            manageChange={(value, identifier) =>
              changeFieldRegister(value, identifier)
            }
            value={nameFirst}
            errors={errors.nameFirst}
            success={success}
          />
          {errors.nameFirst && (
            <div className="signup__error">{errors.nameFirst}</div>
          )}
          <RegisterField
            name="password"
            type="password"
            placeholder="Mot de passe"
            manageChange={(value, identifier) =>
              changeFieldRegister(value, identifier)
            }
            value={password}
            errors={errors.password}
            success={success}
          />
          {errors.password && (
            <div className="signup__error">{errors.password}</div>
          )}
          <RegisterField
            name="confirmPassword"
            type="password"
            placeholder="Confirmer le mot de passe"
            manageChange={(value, identifier) =>
              changeFieldRegister(value, identifier)
            }
            value={confirmPassword}
            errors={errors.password}
            success={success}
          />
          {errors.password && <div className="signup__error"></div>}
          <RegisterField
            name="phoneNumber"
            placeholder="N° de téléphone"
            manageChange={(value, identifier) =>
              changeFieldRegister(value, identifier)
            }
            value={phoneNumber}
            errors={errors.phoneNumber}
            success={success}
          />
          {errors.phoneNumber && (
            <div className="signup__error">{errors.phoneNumber}</div>
          )}
          <RegisterField
            name="address"
            placeholder="Adresse"
            manageChange={(value, identifier) =>
              changeFieldRegister(value, identifier)
            }
            value={address}
            errors={errors.address}
            success={success}
          />
          {errors.address && (
            <div className="signup__error">{errors.address}</div>
          )}
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
  loggedMessage: "Connecté",
};
// == Export
export default Register;

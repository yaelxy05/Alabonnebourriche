// == Import npm
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// == Import components
import ReservationField from "./ReservationField";
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";
registerLocale("fr", fr);
setDefaultLocale("fr");
import "react-datepicker/dist/react-datepicker.css";
// == Import Style
import "react-calendar/dist/Calendar.css";
import "./reservation.scss";
import "../Register/register.scss";

// == Import img

// == Composant
const Reservation = ({
  email,
  name,
  address,
  phoneNumber,
  nbPerson,
  date,
  hour,
  handleSelect,
  handleReservation,
  changeFieldReservation,
  decrement,
  increment,
  handleCount,
  handleSelectDate,
  messagesError,
  signupError,
}) => {
  let errorsObj = {
    email: "",
    name: "",
    address: "",
    phoneNumber: "",
  };
  const [errors, setErrors] = useState(errorsObj);
  const [success, setSuccess] = useState(false);
  const handleReservationSubmit = (evt) => {
    evt.preventDefault();
    handleReservation();
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
    } else if (email.length > 4 && /\S+@\S+\.\S+/.test(email) && email !== "") {
      setSuccess(true);
    }

    if (name === "") {
      errorObj.name = "Le nom est requis.";
      error = true;
    } else if (name.length < 2) {
      errorObj.name = "Le nom doit contenir minimum 6 caractères.";
      error = true;
    } else if (
      !/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(
        name
      )
    ) {
      errorObj.name = "Le nom ne doit pas contenir de chiffres.";
      error = true;
    } else {
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
    setErrors(errorObj);
  };
  useEffect(() => {
    signupError([]);
  }, []);
  console.log(messagesError);
  const handleCountPerson = (evt) => {
    evt.preventDefault();
    handleCount();
  };
  const countIncrement = (evt) => {
    evt.preventDefault();
    increment();
  };
  const countDecrement = (evt) => {
    evt.preventDefault();
    decrement();
  };
  const selectValue = (evt) => {
    evt.preventDefault();
    handleSelect();
  };

  return (
    <div className="reservation">
      <h1>Réservation</h1>

      <div className="reservation_wrapper">
        <form action="" onSubmit={handleReservationSubmit}>
          <ReservationField
            name="name"
            placeholder="Nom"
            manageChange={(value, identifier) =>
              changeFieldReservation(value, identifier)
            }
            value={name}
            errors={errors.name}
            success={success}
          />
          {errors.name && <div className="signup__error">{errors.name}</div>}
          <ReservationField
            name="phoneNumber"
            placeholder="Numéros de téléphone"
            manageChange={(value, identifier) =>
              changeFieldReservation(value, identifier)
            }
            value={phoneNumber}
            errors={errors.phoneNumber}
            success={success}
          />
          {errors.phoneNumber && (
            <div className="signup__error">{errors.phoneNumber}</div>
          )}
          <ReservationField
            name="email"
            placeholder="Adresse Email"
            manageChange={(value, identifier) =>
              changeFieldReservation(value, identifier)
            }
            value={email}
            errors={errors.email}
            success={success}
          />
          {errors.email && <div className="signup__error">{errors.email}</div>}
          <ReservationField
            name="address"
            placeholder="Adresse"
            manageChange={(value, identifier) =>
              changeFieldReservation(value, identifier)
            }
            value={address}
            errors={errors.address}
            success={success}
          />
          {errors.address && (
            <div className="signup__error">{errors.address}</div>
          )}
          <div className="reservation_input number">
            <label>Nombre de personne(s) : </label>
            <div className="reservation_wrapper--button">
              <button name="substract" onClick={countDecrement}>
                -
              </button>
              <input
                type="number"
                min={1}
                value={nbPerson}
                onChange={handleCountPerson}
                required
              />
              <button name="add" onClick={countIncrement}>
                +
              </button>
            </div>
          </div>
          <div className="reservation_input calendar">
            <label>Sélectionnez le jour</label>
            <DatePicker
              selected={date}
              onChange={handleSelectDate}
              locale="fr"
              minDate={new Date()}
              showDisabledMonthNavigation
              isClearable={true}
              dateFormat="dd MMMM yyyy"
              placeholderText="Selectionnez une date"
            />
          </div>
          <div className="reservation_input hours">
            <label>Choississez votre heure</label>
            <div className="reservation_wrapper--select">
              <select
                name="hour"
                id="reservation_hour"
                required
                value={hour}
                onChange={(evt) => handleSelect(evt.target.value)}
                type="select"
              >
                <option value="12h00">12h00</option>
                <option value="12h30">12h30</option>
                <option value="13h00">13h00</option>
                <option value="20h00">20h00</option>
                <option value="20h30">20h30</option>
                <option value="21h00">21h00</option>
                <option value="21h30">21h30</option>
              </select>
            </div>
          </div>
          <div className="button_submit">
            <button type="submit" className="reservation_button">
              Validez votre réservation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
Reservation.propTypes = {
  /** value for the email */
  email: PropTypes.string.isRequired,
  /** called when onChange event is received by an input, two parameters :
   * - new value
   * - name
   */
  /** value for the firstName */
  name: PropTypes.string.isRequired,
  changeFieldReservation: PropTypes.func.isRequired,
  /** called when the form is submitted */
  handleReservation: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
  /** value for the email */
  address: PropTypes.string.isRequired,
  /** value for the email */
  phoneNumber: PropTypes.string.isRequired,
  /** value for the email */
};
// == Export
export default Reservation;

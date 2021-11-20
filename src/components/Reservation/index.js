// == Import npm
import React, { useState } from "react";
import Calendar from "react-calendar";
import PropTypes from "prop-types";
// == Import components
import ReservationField from "./ReservationField";
// == Import Style
import "react-calendar/dist/Calendar.css";
import "./reservation.scss";

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
}) => {

  const handleReservationSubmit = (evt) => {
    evt.preventDefault();
    handleReservation();
  };
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
  console.log(selectValue);
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
          />
          <ReservationField
            name="phoneNumber"
            placeholder="Numéros de téléphone"
            manageChange={(value, identifier) =>
              changeFieldReservation(value, identifier)
            }
            value={phoneNumber}
          />
          <ReservationField
            name="email"
            placeholder="Adresse Email"
            manageChange={(value, identifier) =>
              changeFieldReservation(value, identifier)
            }
            value={email}
          />
          <ReservationField
            name="address"
            placeholder="Adresse"
            manageChange={(value, identifier) =>
              changeFieldReservation(value, identifier)
            }
            value={address}
          />

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
          <label>Sélectionnez le jour</label>
          <Calendar
            onChange={handleSelectDate}
            value={date}
            className="reservation_calendar"
            tileClassName="reservation_tile"
            minDate={new Date()}
            format="MM/dd/yyyy"
            required
          />
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
  handleReservationSubmit: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
  /** value for the email */
  address: PropTypes.string.isRequired,
  /** value for the email */
  phoneNumber: PropTypes.string.isRequired,
  /** value for the email */
};
// == Export
export default Reservation;

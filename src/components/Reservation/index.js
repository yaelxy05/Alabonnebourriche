// == Import npm
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
// == Import components

// == Import Style
import "react-calendar/dist/Calendar.css";
import "./reservation.scss";

// == Import img

// == Composant
const Reservation = () => {
  const [value, onChange] = useState(new Date());
  const [count, setCount] = useState(1);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.name === "add") {
      setCount(count + 1);
    } else if (e.target.name === "substract" && count > 1) {
      setCount(count - 1);
    }
  };

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  return (
    <div className="reservation">
      <h1>Réservation</h1>

      <div className="reservation_wrapper">
        <form action="">
          <div className="reservation_input lastname">
            <label>Nom</label>
            <input type="text" placeholder="Nom de famille" />
          </div>
          <div className="reservation_input phone">
            <label>Numéros de téléphone</label>
            <input type="text" placeholder="Téléphone" />
          </div>
          <div className="reservation_input email">
            <label>Email</label>
            <input type="text" placeholder="Email" />
          </div>
          <div className="reservation_input number">
            <label>Nombre de personne(s) : </label>
            <div className="reservation_wrapper--button">
              <button name="substract" onClick={handleClick}>
                -
              </button>
              <input
                type="number"
                min={1}
                value={count}
                onChange={handleChange}
              />
              <button name="add" onClick={handleClick}>
                +
              </button>
            </div>
          </div>
          <label>Sélectionnez le jour</label>
          <Calendar
            onChange={onChange}
            value={value}
            className="reservation_calendar"
            minDate={new Date()}
          />

          <div className="reservation_input hours">
            <label>Sélectionnez un horaire</label>
            <div className="reservation_wrapper--button">
              <select name="hour" id="reservation_hour">
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

// == Export
export default Reservation;

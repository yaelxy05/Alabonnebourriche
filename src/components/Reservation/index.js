// == Import npm
import React, { useState } from 'react';
import Calendar from 'react-calendar';
// == Import components
import 'react-calendar/dist/Calendar.css';

// == Import
import './reservation.scss';
// == Import img

// == Composant
const Reservation = () => {
  const [value, onChange] = useState(new Date());
  
  return (
    <div className="reservation">
      <h1>Réservation</h1>

      <div className="reservation_wrapper">
        <Calendar
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
}
  


// == Export
export default Reservation;

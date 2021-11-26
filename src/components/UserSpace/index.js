import React, { useEffect } from "react";
import PropTypes from "prop-types";
// == Import Css
import "./userSpace.scss";

const UserSpace = ({ reservations, fetchReservation }) => {
  useEffect(() => {
    fetchReservation();
  }, [])
  console.log(reservations);
  let options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};

  return (
    <div className="userspace">
      <h1>Votre espace</h1>
      <div className="userspace_infoUser--box">
        <div className="userspace infoUser">
          <div className="userspace_info userspace_info--h2">
            <h2>NOM PRENOM</h2>
          </div>
          <div className="userspace_info">
            <i className="fas fa-mobile-alt"></i>
            <p>0254556665</p>
          </div>
          <div className="userspace_info">
            <i className="fas fa-envelope"></i>
            <p>yayay@mail.fr</p>
          </div>
          <div className="userspace_info">
            <i className="fas fa-map-marked-alt"></i>
            <p>236 route de Rabou</p>
          </div>
        </div>
      </div>
      <div className="userspace_reservationList">
        <h2>Mes réservations</h2>
        <div className="userspace_reservationList--table">
          <table>
            <thead>
              <tr>
                <td colSpan="1">Date de réservation</td>
                <td colSpan="1">Heure de réservation</td>
                <td colSpan="1">Nombre de personnes</td>
              </tr>
            </thead>
            <tbody>
              {reservations && reservations.map((reservationLists) => {
                const update = new Date(reservationLists.date).toLocaleDateString('fr-FR')
                return (
                  <tr key={reservationLists.id}>
                    <td>{update}</td>
                    <td>{reservationLists.hour}</td>
                    <td>{reservationLists.nbPerson}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
UserSpace.propTypes = {
  reservations: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      hour: PropTypes.string.isRequired,
      nbPerson: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
export default UserSpace;

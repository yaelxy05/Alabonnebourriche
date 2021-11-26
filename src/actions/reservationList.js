// === get reservations list
export const FETCH_RESERVATION = 'FETCH_RESERVATION';
export const SAVE_RESERVATION = 'SAVE_RESERVATION';
export const LOADER = 'LOADER';

// ====================================
// =========== get reservations list ==
export const fetchReservation = () => ({
  type: FETCH_RESERVATION,
});

export const saveReservation = (reservations) => ({
  type: SAVE_RESERVATION,
  reservations: reservations,
});

export const loader = () => ({
  type: LOADER,
});

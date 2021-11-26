// === get reservations list
export const FETCH_RESERVATION = 'FETCH_RESERVATION';
export const SAVE_RESERVATION = 'SAVE_RESERVATION';

// === get users list
export const FETCH_USER = 'FETCH_USER';
export const SAVE_USERLIST = 'SAVE_USERLIST';
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

// ====================================
// =========== get reservations list ==
export const fetchUser = () => ({
  type: FETCH_USER,
});

export const saveUserList = (users) => ({
  type: SAVE_USERLIST,
  users: users,
});

import React from "react";
import { Route, Redirect } from "react-router-dom";
import UserSpace from "src/containers/UserSpace";
const ProtectedRoute = ({ isLogged, loading }) => {
  if (isLogged) {
    return (
      <Route path="/espace-utilisateur">{!loading && <UserSpace />}</Route>
    );
  } else {
    return <Redirect to="/connexion"></Redirect>;
  }
};

export default ProtectedRoute;

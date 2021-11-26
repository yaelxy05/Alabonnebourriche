// == Import npm
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
// == Import components
import Home from "src/components/Home";
import Footer from "src/components/Footer";
import Page404 from "src/components/404";
import Nav from "src/containers/Nav";
import Restaurant from "src/components/Restaurant";
import Localisation from "src/components/Localisation";
import Reservation from "src/containers/Reservation";
import Register from "src/containers/Register";
import Login from "src/containers/Login";
import Menu from "src/components/Menu";
import UserSpace from "src/containers/UserSpace";
// == Import
import "./app.scss";

// == Composant
const App = ({ isLogged, checkLogin, loading}) => {
  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route path="/connexion">
          <Login />
        </Route>
        <Route path="/inscription">
          <Register />
        </Route>
        {isLogged && (
          <Route path="/espace-utilisateur">
            {!loading && <UserSpace />}
          </Route>
        )}

        <Route path="/reservation">
          <Reservation />
        </Route>
        <Route path="/nous-trouver">
          <Localisation />
        </Route>
        <Route path="/notre-carte">
          <Menu />
        </Route>
        <Route path="/restaurant">
          <Restaurant />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

App.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  /** message displayed when "connected" */
  checkLogin: PropTypes.func.isRequired,
};

// == Export
export default App;

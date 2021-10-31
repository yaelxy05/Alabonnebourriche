// == Import npm
import React from "react";
import { Route, Switch } from "react-router-dom";
// == Import components
import Home from "src/components/Home";
import Footer from "src/components/Footer";
import Page404 from "src/components/404";
import Nav from "src/components/Nav";
import Restaurant from "src/components/Restaurant";
import Localisation from "src/components/Localisation";
import Reservation from "src/components/Reservation";
import Register from "src/components/Register";
import Login from "src/components/Login";
// == Import
import "./app.scss";

// == Composant
const App = () => (
  <div className="app">
    <Nav />
    <Switch>
      <Route path="/connexion">
        <Login />
      </Route>
      <Route path="/inscription">
        <Register />
      </Route>
      <Route path="/reservation">
        <Reservation />
      </Route>
      <Route path="/nous-trouver">
        <Localisation />
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

// == Export
export default App;

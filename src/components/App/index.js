// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// == Import components
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import Page404 from 'src/components/404';
import Header from 'src/components/Header';
// == Import
import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
      <Switch>
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

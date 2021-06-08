import React from 'react';
import Home from './home/Home';
import Awards from './awards/Awards';
import NavBar from './common/Navbar';
import Footer from './common/Footer';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/Awards" component={Awards} />
      </Switch>
      <Footer />
    </div>
  );
};
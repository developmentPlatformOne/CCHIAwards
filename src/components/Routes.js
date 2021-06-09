import React from 'react';
import Home from './home/Home';
import Awards from './awards/Awards';
import Health from './awards/Health';
import Medical from './awards/Medical';
import ThirdParty from './awards/ThirdParty';
import NavBar from './common/Navbar';
import Footer from './common/Footer';
import { HashRouter as Route, Switch, Redirect } from 'react-router-dom';

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
        <Route exact path="/Awards/Health" component={Health} />
        <Route exact path="/Awards/Medical" component={Medical} />
        <Route exact path="/Awards/ThirdParty" component={ThirdParty} />
      </Switch>
      <Footer />
    </div>
  );
};
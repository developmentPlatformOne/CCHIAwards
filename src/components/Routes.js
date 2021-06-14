import React, {useRef} from 'react';
import Home from './home/Home';
import Awards from './awards/Awards';
import Health from './awards/Health';
import Medical from './awards/Medical';
import ThirdParty from './awards/ThirdParty';
import NavBar from './common/Navbar';
import Footer from './common/Footer';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {

  const scrollToDiv = (ref) => window.scrollTo(0, (ref.current.offsetTop - 85));
  const aboutRef = useRef();
  const aimsRef = useRef();
  const judgeRef = useRef();
  const homeRef = useRef();

  return (
    <div>
      <NavBar 
        aboutScroll={()=> scrollToDiv(aboutRef)}
        aimsScroll={()=> scrollToDiv(aimsRef)}
        judgeScroll={()=> scrollToDiv(judgeRef)}
        homeScroll={()=> scrollToDiv(homeRef)}
      />
      <Router>
      <Switch>
        <Route exact path="/Home" render={(props) => (
          <Home
            {...props} 
            aboutRef={aboutRef} 
            aimsRef={aimsRef} 
            judgeRef={judgeRef} 
            homeRef={homeRef} 
          />
        )} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/Awards" component={Awards} />
        <Route exact path="/Awards/Health" component={Health} />
        <Route exact path="/Awards/Medical" component={Medical} />
        <Route exact path="/Awards/ThirdParty" component={ThirdParty} />
      </Switch>
      </Router>
      <Footer />
    </div>
  );
};
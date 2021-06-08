import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import SwitchLang from './SwitchLang';
import Logo from '../../dist/img/logo.PNG';
import { Container, Nav, Navbar } from 'react-bootstrap';



const lang = localStorage.getItem('lang');

const NavBar = () => {
  const location = useLocation();

  const isCurrentURL = (url) => {
      return location.pathname.toLowerCase() === url.toLowerCase();
  }
  
  const [isActive, setActive] = useState('home');

  const addActiveClass = (e) => {
      const clicked = e.target.id
      if(isActive === clicked) {
        setActive('');
      } else {
        setActive(clicked);
     }
  }
    


  return (
    <Navbar expand="lg">
      <Container>
        <Link className="navbar-brand" to="/Home">
          <img src={Logo} alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          { isCurrentURL('/Home') ? 
          <Nav className="mr-auto">
            <Link
              className={isActive === "home"? 'nav-link active-link': 'nav-link'}
              to="/Home"
              id="home"
              onClick={e => addActiveClass(e)}
            >

              {lang === 'ar' ? 'الرئيسية' : 'Home' }
            </Link>
            <Link
              className={isActive === "about"? 'nav-link active-link': 'nav-link'}
              to="/Home"
              id="about"
              onClick={e => addActiveClass(e)}
            >

              {lang === 'ar' ? 'عنا' : 'About' }
            </Link>
            <Link
              className={isActive === "aims"? 'nav-link active-link': 'nav-link'}
              to="/Home"
              id="aims"
              onClick={e => addActiveClass(e)}
            >

              {lang === 'ar' ? 'الغايات والأهداف' : 'Aims and Objective' }
            </Link>
            <Link
              className={isActive === "judge"? 'nav-link active-link': 'nav-link'}
              to="/Home"
              id="judge"
              onClick={e => addActiveClass(e)}
            >

              {lang === 'ar' ? 'لجنة التحكيم' : 'Judge Panel' }
            </Link>
            <Link
              className={isActive === "awards"? 'nav-link active-link': 'nav-link'}
              to="/Awards"
              id="awards"
              onClick={e => addActiveClass(e)}
            >
              {lang === 'ar' ? 'الجوائز' : 'Awards' }
            </Link>
          </Nav>
          :
          <Nav className="mr-auto">
            <Link
              className={isActive === "home"? 'nav-link active-link': 'nav-link'}
              to="/Home"
              id="home"
              onClick={e => addActiveClass(e)}
            >
              {lang === 'ar' ? 'الرئيسية' : 'Home' }
            </Link>
            <Link
              className={isActive === "awards"? 'nav-link active-link': 'nav-link'}
              to="/Awards"
              id="awards"
              onClick={e => addActiveClass(e)}
            >
              {lang === 'ar' ? 'الجوائز' : 'Awards' }
            </Link>
          </Nav> 
          }
        </Navbar.Collapse>
        <SwitchLang />
      </Container>
    </Navbar>
  );
};

export default NavBar;



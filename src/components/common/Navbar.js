import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import SwitchLang from './SwitchLang';
import Logo from '../../dist/img/logo.PNG';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';



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
            <NavDropdown
            className={isActive === "awards"? 'active-link': ''}
              title={lang === 'ar' ? 'الجوائز' : 'Awards' }
              id="awards"
              onClick={e => addActiveClass(e)}
            >
              <Link className="dropdown-item" to="/Awards/Health">Health Insurance Companies</Link>
              <Link className="dropdown-item" to="/Awards/Medical">Medical Service Providers</Link>
              <Link className="dropdown-item" to="/Awards/ThirdParty">Third Party Administrators (TPAs)</Link>
            </NavDropdown>
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
            <NavDropdown
            className={isActive === "awards"? 'active-link': ''}
              title={lang === 'ar' ? 'الجوائز' : 'Awards' }
              id="awards"
              onClick={e => addActiveClass(e)}
            >
              <Link className="dropdown-item" to="/Awards/Health">Health Insurance Companies</Link>
              <Link className="dropdown-item" to="/Awards/Medical">Medical Service Providers</Link>
              <Link className="dropdown-item" to="/Awards/ThirdParty">Third Party Administrators (TPAs)</Link>
            </NavDropdown>
          </Nav> 
          }
        </Navbar.Collapse>
        <SwitchLang />
      </Container>
    </Navbar>
  );
};

export default NavBar;



import React, {useState} from 'react';
import { Link, useLocation, HashRouter } from 'react-router-dom';
import SwitchLang from './SwitchLang';
import Logo from '../../dist/img/logo.PNG';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';



const lang = localStorage.getItem('lang');

const NavBar = (props) => {
  const location = useLocation();

  const isCurrentURL = (url) => {
      return location.hash.toLowerCase() === url.toLowerCase();
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

  const hideCollapseMenu = () => {
    document.getElementById("responsive-navbar-nav").classList.remove("show");
    document.getElementById("collapseBtn").classList.add("collapsed");
    
  }

  return (
    <Navbar collapseOnSelect expand="lg" fixed="top">
      <Container>
      <HashRouter>
        <Link className="navbar-brand" to="/Home">
          <img src={Logo} alt="logo" />
        </Link>
        <Navbar.Toggle id="collapseBtn" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          { isCurrentURL('#/Home') ? 
          <Nav className="mr-auto">
            <Link
              className={isActive === "home"? 'nav-link active-link': 'nav-link'}
              to="/Home"
              id="home"
              onClick={e => {addActiveClass(e); props.homeScroll(); hideCollapseMenu()}}
            >
              {lang === 'ar' ? 'الرئيسية' : 'Home' }
            </Link>
            <Link
              className={isActive === "about"? 'nav-link active-link': 'nav-link'}
              id="about"
              onClick={e => {addActiveClass(e); props.aboutScroll()}}
            >
              {lang === 'ar' ? 'عنا' : 'About' }
            </Link>
           
            <Link
              className={isActive === "aims"? 'nav-link active-link': 'nav-link'}
              id="aims"
              onClick={e => {addActiveClass(e); props.aimsScroll()}}
            >
              {lang === 'ar' ? 'الغايات والأهداف' : 'Aims and Objective' }
            </Link>
            <Link
              className={isActive === "judge"? 'nav-link active-link': 'nav-link'}
              id="judge"
              onClick={e => {addActiveClass(e); props.judgeScroll()}}
            >
              {lang === 'ar' ? 'لجنة التحكيم' : 'Judge Panel'}
            </Link>
            <NavDropdown
            className={isActive === "awards"? 'active-link': ''}
              title={lang === 'ar' ? 'الجوائز' : 'Awards' }
              id="awards"
              onClick={e => addActiveClass(e)}
            >
              <Link className="dropdown-item" onClick={() => hideCollapseMenu()} to="/Awards/Health">{lang === 'ar' ? 'شركات التأمين الصحي' : 'Health Insurance Companies' }</Link>
              <Link className="dropdown-item" onClick={() => hideCollapseMenu()} to="/Awards/Medical">{lang === 'ar' ? 'مقدمو الخدمات الطبية' : 'Medical Service Providers' }</Link>
              <Link className="dropdown-item" onClick={() => hideCollapseMenu()} to="/Awards/ThirdParty">{lang === 'ar' ? 'مبادرة المطالبات للسنة TPA' : 'Third Party Administrators (TPAs)' }</Link>
            </NavDropdown>
          </Nav>
          :
          <Nav className="mr-auto">
            <Link
              className={isActive === "home"? 'nav-link active-link': 'nav-link'}
              to="/Home"
              id="home"
              onClick={e => {addActiveClass(e); hideCollapseMenu()}}
            >
              {lang === 'ar' ? 'الرئيسية' : 'Home' }
            </Link>
            <NavDropdown
            className={isActive === "awards"? 'active-link': ''}
              title={lang === 'ar' ? 'الجوائز' : 'Awards' }
              id="awards"
              onClick={e => addActiveClass(e)}
            >
              <Link className="dropdown-item" onClick={() => hideCollapseMenu()} to="/Awards/Health">{lang === 'ar' ? 'شركات التأمين الصحي' : 'Health Insurance Companies' }</Link>
              <Link className="dropdown-item" onClick={() => hideCollapseMenu()} to="/Awards/Medical">{lang === 'ar' ? 'مقدمو الخدمات الطبية' : 'Medical Service Providers' }</Link>
              <Link className="dropdown-item" onClick={() => hideCollapseMenu()} to="/Awards/ThirdParty">{lang === 'ar' ? 'مبادرة المطالبات للسنة TPA' : 'Third Party Administrators (TPAs)' }</Link>
            </NavDropdown>
          </Nav> 
          }
        </Navbar.Collapse>
        </HashRouter>
        <SwitchLang />
      </Container>
    </Navbar>
  );
};

export default NavBar;



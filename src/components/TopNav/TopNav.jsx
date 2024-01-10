import React, { useState } from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from '../../assets/logo.svg';
import './TopNav.css'; // Импорт вашего CSS-файла
import 'bootstrap/dist/css/bootstrap.min.css';

const TopNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    
      <Navbar expand="lg" className="bg-body-tertiary custom-navbar" style={{ height: '80px', display: 'block', paddingTop: '10px'}}>
      <Container style={{ maxWidth: '1200px', margin: '0 auto', justifyContent: 'space-between'}}>
        <Navbar.Brand className="d-flex">
            <img
              src={Logo}
              width="250"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle />
        
        <Navbar.Collapse>
          <Nav className={`m-auto ${menuOpen ? 'open' : ''}`}>
            <Nav.Link to="/landing" as={NavLink} className="nav-link-underline" style={{ paddingRight: '50px'}}>
              лендинг
            </Nav.Link>
            <Nav.Link to="/multipage" as={NavLink} className="nav-link-underline" style={{ paddingRight: '50px'}}>
              многостраничник
            </Nav.Link>
            <Nav.Link to="/onlinestore" as={NavLink} className="nav-link-underline" style={{ paddingRight: '50px'}}>
                онлайн-магазин
            </Nav.Link>
            <Nav.Link to="/onlinestore" as={NavLink} className="nav-link-underline" style={{ paddingRight: '50px'}}>
                портфолио
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
        <Navbar.Text style={{ display: 'inline-block', paddingRight: '30px', fontSize: '19px' }}>
            +7 707 965-85-95
        </Navbar.Text>
        

        
        
      </Container>
    </Navbar>
      
  );
};

export default TopNav;


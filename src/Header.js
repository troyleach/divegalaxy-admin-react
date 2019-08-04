import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';


class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/">Dive GalaxSea</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/single-day-rates">Single Day Rates</Nav.Link>
            <Nav.Link href="/gear-rental">Gear Rental</Nav.Link>
            <Nav.Link href="/training">Training</Nav.Link>
            <Nav.Link href="/specialties">Specialties</Nav.Link>
            <Nav.Link href="/clients">Clients</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/logOut">Log Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}


export default Header;
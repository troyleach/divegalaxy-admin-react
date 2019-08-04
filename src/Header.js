import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home">Dive GalaxSea</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#SingleDayRates">Single Day Rates</Nav.Link>
            <Nav.Link href="#GearRental">Gear Rental</Nav.Link>
            <Nav.Link href="#Training">Training</Nav.Link>
            <Nav.Link href="#Specialties">Specialties</Nav.Link>
            <Nav.Link href="#Clients">Clients</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Log Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}


export default Header;
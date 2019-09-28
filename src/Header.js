import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './logo_original.png';

import apiService from './services/api';
import { Redirect } from 'react-router';


class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      errors: [],
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const result = await apiService.logout();
    if (result.status !== 204) {
      alert('Something went wrong please try again')
    }

    if (result.status === 204) {
      localStorage.setItem("isAuthenticated", JSON.stringify(false))
      this.setState({ redirect: true })
    }
  }
  render() {
    const { redirect } = this.state
    if (redirect) {
      return <Redirect to='/' />
    }
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/"><img className='logo' src={logo} alt="Logo" /></Navbar.Brand>
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
            <Nav.Link onClick={this.handleSubmit}>Log Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}


export default Header;
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './logo_original.png';
import { Redirect } from 'react-router';

import apiService from './services/api';
import './Header.css';


class Header extends React.Component {
  constructor(props) {
    super(props);

    const loggedIn = JSON.parse(localStorage.getItem("isAuthenticated"));
    this.state = {
      isAuthenticated: loggedIn
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const result = await apiService.logout(token);
    if (result.status !== 204) {
      alert('Something went wrong please try again')
    }

    if (result.status === 204) {
      localStorage.setItem("isAuthenticated", JSON.stringify(false))
      this.setState({ redirect: true })
    }
  }

  async componentDidMount() { }

  render() {
    const { redirect, isAuthenticated: loggedIn } = this.state
    if (redirect) {
      return <Redirect to='/login' />
    }

    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/"><img className='logo' src={logo} alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={!loggedIn ? 'loggedIn mr-auto' : "mr-auto"}>
            <Nav.Link href="/single-day-rates">Single Day Rates</Nav.Link>
            <Nav.Link href="/gear-rental">Gear Rental</Nav.Link>
            <Nav.Link href="/training">Training</Nav.Link>
            <Nav.Link href="/specialties">Specialties</Nav.Link>
            <Nav.Link href="/clients">Clients</Nav.Link>
          </Nav>
          <Nav className={!loggedIn ? 'loggedIn' : ""} >
            <Nav.Link onClick={this.handleSubmit}>Log Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}


export default Header;
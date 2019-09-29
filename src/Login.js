import React, { Component } from "react";
import { Button, Form, FormGroup, FormControl } from "react-bootstrap";
import { Redirect } from 'react-router';
import "./Login.css";
import apiService from './services/api';

import Header from './Header';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      errors: [],
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state
    const data = { email, password };
    apiService.login(data).then(response => {
      if (response.status !== 200) {
        alert('We could not find either the email or password. Please try again')
      }
      if (response.status === 200) {
        this.setState({
          redirect: true
        })
      }
    });

  }


  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to='/' />
    }
    return (
      <div className="App">
        <Header  {...this.state} />
        <div className="Login">
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email">
              <Form.Label>Email</Form.Label>
              <FormControl
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password">
              <Form.Label>Password</Form.Label>
              <FormControl
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <Button
              block
              disabled={!this.validateForm()}
              type="submit"
            >
              Login
          </Button>
          </form>
        </div>
      </div>
    );
  }
}

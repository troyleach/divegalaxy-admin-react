import React, {
  Component
} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './Header';
import Footer from './Footer';

import GearRental from './GearRental';
import SingleDayRates from './SingleDayRates';
import Training from './Training';
import Specialties from './Specialties';
import Clients from './Clients';
import Login from './Login'

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isAuthenticated: false
    };
  }

  render() {
    console.log('here in the home component', this.state.isAuthenticated)
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Route exact path="/" render={() => (
              <div>
                {!this.state.isAuthenticated ? (
                  <Login />
                ) : (
                    <div className='container'>
                      <h1>Welcome to the Admin Panel</h1>
                    </div >
                  )}
              </div>
            )} />
            <Route exact={true} path="/single-day-rates" component={SingleDayRates} />
            <Route path="/gear-rental" component={GearRental} />
            <Route path="/training" component={Training} />
            <Route path="/specialties" component={Specialties} />
            <Route path="/clients" component={Clients} />
            <Route path="/login" component={Login} />
          </div>
        </Router>
        <Footer />
      </div >
    );
  };
}

export default Home;

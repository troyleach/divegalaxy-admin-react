import React, {
  Component
} from 'react';

import BodyDisplay from './BodyDisplay';
import Header from './Header';
import Footer from './Footer';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GearRental from './GearRental';
import SingleDayRates from './SingleDayRates';
import Training from './Training';
import Specialties from './Specialties';
import Clients from './Clients';

class Home extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Route exact path="/" render={() => (
              <div className='container'>
                <h1>Welcome to the Admin Panel</h1>
              </div >
            )} />
            <Route exact={true} path="/single-day-rates" component={SingleDayRates} />
            <Route path="/gear-rental" component={GearRental} />
            <Route path="/training" component={Training} />
            <Route path="/specialties" component={Specialties} />
            <Route path="/clients" component={Clients} />
          </div>
        </Router>
        <Footer />
      </div >
    );
  };
}

export default Home;

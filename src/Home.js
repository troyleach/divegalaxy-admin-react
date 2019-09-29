import React, {
  Component
} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

// FIXME: I feel there is a better way then putting the header/footer
// In each file but I could not get it to work
// import Header from './Header';
// import Footer from './Footer';

import GearRental from './GearRental';
import SingleDayRates from './SingleDayRates';
import Training from './Training';
import Specialties from './Specialties';
import Clients from './Clients';
import LandingPage from './LandingPage';
import Login from './Login'

class Home extends Component {
  constructor(props) {
    super(props);

    const auth = JSON.parse(localStorage.getItem("isAuthenticated"));
    this.state = {
      email: "",
      password: "",
      isAuthenticated: auth || false
    };
  }

  async componentDidMount() {
    // this is kind of like the entry point. this will run on every route.
    // this is where global code must go
    if (!this.state.isAuthenticated) {
      return <Redirect to='/login' />
    }
  }

  componentWillMount() { };

  render() {
    return (
      <div className="App">
        <div>
          <Switch>
            <Route exact path="/" render={() => (
              <div>
                <LandingPage {...this.state} />
              </div>
            )} />
            <Route path="/single-day-rates" component={SingleDayRates} />
            <Route path="/gear-rental" component={GearRental} />
            <Route path="/training" component={Training} />
            <Route path="/specialties" component={Specialties} />
            <Route path="/clients" component={Clients} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </div >
    );
  };
}

export default Home;

import React, {
  Component
} from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

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
    console.log('did this render and if so when')
  }

  render() {
    const { isAuthenticated } = this.state;
    console.log('home component isAuthenticated: ', this.state)
    if (!isAuthenticated) {
      console.log('should be here and redirect')
      return <Login />
    }
    return (
      <div className="App">
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
        <Footer />
      </div >
    );
  };
}

export default Home;

import React, {
  Component
} from 'react';
import { Redirect } from 'react-router';

import Header from './Header';
import Footer from './Footer';
import DisplayTable from './Table';
// TODO is there a way to bring in just the one function i need?
import apiService from './services/api';

class Specialties extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      category: "Specialties",
      route: 'specialties',
      model: 'specialty',
      loggedIn: JSON.parse(localStorage.isAuthenticated)
    }
  }

  async componentDidMount() {
    if (this.state.loggedIn) {
      const data = await apiService.getData('specialties')
      this.setState({ data: data });
    }
  }

  render() {
    // FIXME: I feel that has to be a better way to protect the routes then this?
    const { loggedIn } = this.state
    if (!loggedIn) {
      return <Redirect to='/login' />
    }

    return (
      <div className="App">
        <Header  {...this.state} />
        <div className='container'>
          <h3>{this.state.category}</h3>
          <DisplayTable {...this.state} />
        </div >
        <Footer />
      </div >
    );
  };
}

export default Specialties;

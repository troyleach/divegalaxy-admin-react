import React, {
  Component
} from 'react';
import { Redirect } from 'react-router';

import Header from './Header';
import Footer from './Footer';
import DisplayTable from './Table';
import apiService from './services/api';

class SingleDayRates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      category: "Single Day Rate",
      route: 'divings',
      model: 'diving',
      loggedIn: JSON.parse(localStorage.isAuthenticated)
    }
  }

  async componentDidMount() {
    if (this.state.loggedIn) {
      const data = await apiService.getData('divings')
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
      </div>
    )
  }
}

export default SingleDayRates;

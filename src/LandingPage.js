import React, {
  Component
} from 'react';

import { Redirect } from 'react-router';

import Header from './Header';
import Footer from './Footer';

class LandingPage extends Component {
  constructor(props) {
    super(props);

    const auth = JSON.parse(localStorage.getItem("isAuthenticated")) || false;
    this.state = {
      isAuthenticated: auth,
      category: 'Dive GalaxSea Dashboard'
    };
  }

  async componentDidMount() { }

  render() {
    const { isAuthenticated } = this.state
    if (!isAuthenticated) {
      return <Redirect to='/login' />
    }
    return (
      <div className="App">
        <Header  {...this.state} />
        <div className='container'>
          <h3>{this.state.category}</h3>
          <div>Click on one of the tabs in the upper navigation bar to edit your rates</div>
        </div >
        <Footer />
      </div >
    );
  };
}

export default LandingPage;

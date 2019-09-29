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
      category: 'Landing Page'
    };
  }

  async componentDidMount() {
  }

  render() {
    const { isAuthenticated } = this.state
    if (!isAuthenticated) {
      console.log('should be here and redirect landing page')
      return <Redirect to='/login' />
    }
    return (
      <div className="App">
        <Header  {...this.state} />
        <div className='container'>
          <h3>{this.state.category}</h3>
        </div >
        <Footer />
      </div >
    );
  };
}

export default LandingPage;

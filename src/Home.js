import React, {
  Component
} from 'react';

import BodyDisplay from './BodyDisplay';
import Header from './Header';
import Footer from './Footer';

class Home extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <BodyDisplay />
        <Footer />
      </div >
    );
  };
}

export default Home;

import React, {
  Component
} from 'react';

import apiService from './services/api';

import Header from './Header';
import Footer from './Footer';
import DisplayTable from './Table';

class GearRental extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      category: "Gear Rental",
      route: 'rentals',
      model: 'rental'
    }
  }

  async componentDidMount() {
    const data = await apiService.getData('rentals')
    this.setState({ data: data });
  }

  render() {
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

export default GearRental;

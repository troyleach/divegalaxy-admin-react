import React, {
  Component
} from 'react';

import DisplayTable from './Table';
import apiService from './services/api';

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
        <div className='container'>
          <h3>{this.state.category}</h3>
          <DisplayTable {...this.state} />
        </div >
      </div >
    );
  };
}

export default GearRental;

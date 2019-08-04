import React, {
  Component
} from 'react';

import DisplayTable from './Table';
const fakeData = require('./data');

class GearRental extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: fakeData
    }
  }

  render() {
    return (
      <div className="App">
        <div className='container'>
          <h3>Gear Rental Stuff</h3>
          <DisplayTable {...this.state} />
        </div >
      </div >
    );
  };
}

export default GearRental;

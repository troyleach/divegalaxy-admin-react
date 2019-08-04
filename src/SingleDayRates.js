import React, {
  Component
} from 'react';

import DisplayTable from './Table';
const fakeData = require('./data');

// TODO in a compoonentDidMount() {} make my http requests here

class SingleDayRates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: fakeData
    }
  }

  render() {
    return (
      <div className='container'>
        <h3>Single Day Rates</h3>
        <DisplayTable {...this.state} />
      </div >
    )
  }
}

export default SingleDayRates;

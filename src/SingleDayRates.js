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
      data: fakeData,
      category: "Single Day Rate"
    }
  }

  render() {
    return (
      <div className='container'>
        <h3>{this.state.category}</h3>
        <DisplayTable {...this.state} />
      </div >
    )
  }
}

export default SingleDayRates;

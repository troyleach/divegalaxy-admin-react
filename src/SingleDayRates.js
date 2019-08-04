import React, {
  Component
} from 'react';

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
        <p>Single Day Rates for your viewing pleasure</p>
      </div >
    )
  }
}

export default SingleDayRates;

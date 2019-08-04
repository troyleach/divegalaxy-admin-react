import React, {
  Component
} from 'react';

import DisplayTable from './Table';

const fakeData = require('./data');

class BodyDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: fakeData
    }
  }
  render() {
    console.log('shit head', this.state)
    return (
      <div className='container'>
        <DisplayTable {...this.state} />
      </div >
    )
  }
}

export default BodyDisplay;

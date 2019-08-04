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
    return (
      <div className='container'>
        <DisplayTable {...this.state} />
      </div >
    )
  }
}

export default BodyDisplay;

import React, {
  Component
} from 'react';

import DisplayTable from './Table';
const fakeData = require('./data');

class Training extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: fakeData
    }
  }
  render() {
    return (
      <div className='container'>
        <h3>Training</h3>
        <DisplayTable {...this.state} />
      </div >
    )
  }
}

export default Training;

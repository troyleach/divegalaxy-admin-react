import React, {
  Component
} from 'react';

import DisplayTable from './Table';
const fakeData = require('./data');

class Clients extends Component {
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
          <h3>All about the client</h3>
          <DisplayTable {...this.state} />
        </div >
      </div >
    );
  };
}

export default Clients;

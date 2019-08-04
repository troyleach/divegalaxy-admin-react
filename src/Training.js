import React, {
  Component
} from 'react';

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
        <p>Training for your viewing pleasure</p>
      </div >
    )
  }
}

export default Training;

import React, {
  Component
} from 'react';

import DisplayTable from './Table';
import apiService from './services/api';

// TODO in a compoonentDidMount() {} make my http requests here

class SingleDayRates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      category: "Single Day Rate"
    }
  }

  async componentDidMount() {
    const data = await apiService.getData('divings')
    this.setState({ data: data });
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

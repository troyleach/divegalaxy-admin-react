import React, {
  Component
} from 'react';

import DisplayTable from './Table';
// TODO is there a way to bring in just the one function i need?
import apiService from './services/api';

class Specialties extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      category: "Specialties"
    }
  }

  async componentDidMount() {
    const data = await apiService.getData('specialties')
    this.setState({ data: data });
  }

  render() {
    return (
      <div className="App">
        <div className='container'>
          <h3>{this.state.category}</h3>
          <DisplayTable {...this.state} />
        </div >
      </div >
    );
  };
}

export default Specialties;

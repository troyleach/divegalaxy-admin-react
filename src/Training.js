import React, {
  Component
} from 'react';

import DisplayTable from './Table';
import apiService from './services/api';

class Training extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      category: "Training",
      route: 'trainings',
      model: 'training'
    }
  }

  async componentDidMount() {
    const data = await apiService.getData('trainings')
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

export default Training;

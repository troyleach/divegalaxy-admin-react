import React, {
  Component
} from 'react';

import Header from './Header';
import Footer from './Footer';
import DisplayTable from './Table';
import apiService from './services/api';

class SingleDayRates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      category: "Single Day Rate",
      route: 'divings',
      model: 'diving'
    }
  }

  async componentDidMount() {
    const data = await apiService.getData('divings')
    this.setState({ data: data });
  }

  render() {
    return (
      <div className="App">
        <Header  {...this.state} />
        <div className='container'>
          <h3>{this.state.category}</h3>
          <DisplayTable {...this.state} />
        </div >
        <Footer />
      </div>
    )
  }
}

export default SingleDayRates;

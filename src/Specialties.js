import React, {
  Component
} from 'react';

import Header from './Header';
import Footer from './Footer';
import DisplayTable from './Table';
// TODO is there a way to bring in just the one function i need?
import apiService from './services/api';

class Specialties extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      category: "Specialties",
      route: 'specialties',
      model: 'specialty'
    }
  }

  async componentDidMount() {
    const data = await apiService.getData('specialties')
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
      </div >
    );
  };
}

export default Specialties;

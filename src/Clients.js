import React, {
  Component
} from 'react';
import { Button, Table } from 'react-bootstrap';

import DisplayTable from './Table';
import apiService from './services/api';

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      category: "Clients"
    }
  }

  emailClientHandler = () => {
    console.log('Emailing client now')
  }

  async componentDidMount() {
    const data = await apiService.getData('users')
    this.setState({ data: data });
  }

  // TODO this can be moved out since it is used twice in the app
  renderTableData() {
    return this.state.data.map((item, index) => {
      const { id, first_name, last_name, email, phone } = item //destructuring
      const fullName = `${first_name} ${last_name}`
      return (
        <tr key={id}>
          <td>{fullName}</td>
          <td>{email}</td>
          <td>{phone}</td>
          <td>
            <Button variant="outline-success" className="action-buttons open-modal-btn" onClick={() => this.emailClientHandler(item)}>Email</Button>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div className="App">
        <div className='container'>
          <h3>{this.state.category}</h3>

          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.renderTableData()}
            </tbody>
          </Table>
        </div >
      </div >
    );
  };
}

export default Clients;

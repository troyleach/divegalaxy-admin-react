import React, {
  Component
} from 'react';
import { Button, Table } from 'react-bootstrap';

class DisplayTable extends Component {
  constructor(props) {
    super(props);
  }

  renderTableData() {
    return this.props.data.map((item, index) => {
      const { id, title, description, price } = item //destructuring
      return (
        <tr key={id}>
          <td>{title}</td>
          <td>{description}</td>
          <td>{price}</td>
          <td>
            <Button variant="outline-success" className="action-buttons">Edit</Button>
            <Button variant="outline-danger" className="action-buttons">Delete</Button>
          </td>
        </tr>
      )
    })
  }

  render() {
    // console.log('shit head in table', data)
    console.log('data', this.props)
    return (
      <div className='container'>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">description</th>
              <th scope="col">price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTableData()}
          </tbody>
        </Table>
        <Button variant="outline-success" block>New</Button>
      </div >
    )
  }
}

export default DisplayTable;
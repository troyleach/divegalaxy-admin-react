import React, {
  Component
} from 'react';
import { Button, Table } from 'react-bootstrap';

class DisplayTable extends Component {
  render() {
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
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <Button variant="outline-success" className="action-buttons">Edit</Button>
                <Button variant="outline-danger" className="action-buttons">Delete</Button>
              </td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>
                <Button variant="outline-success" className="action-buttons">Edit</Button>
                <Button variant="outline-danger" className="action-buttons">Delete</Button>
              </td>
            </tr>
            <tr>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>
                <Button variant="outline-success" className="action-buttons">Edit</Button>
                <Button variant="outline-danger" className="action-buttons">Delete</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div >
    )
  }
}

export default DisplayTable;
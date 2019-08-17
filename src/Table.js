import React, {
  Component
} from 'react';
import { Button, Table } from 'react-bootstrap';

// TODO fix the folder spelling
import Modal from './compoonnents/Modal';
import apiService from './services/api';
let category;

class DisplayTable extends Component {
  constructor(props) {
    super(props);
    console.log('props in display table', props.category)
    category = props.category
    this.state = {
      isShowing: false,
      title: '',
      description: '',
      price: '',
      itemId: '',
      category: category
    }
  }

  openEditModalHandler(item) {
    const headerString = `Edit ${this.state.category}`
    this.setState({
      isShowing: true,
      title: item.title,
      description: item.description,
      price: item.price,
      itemId: item.id,
      category: headerString
    })
  }

  openNewModalHandler = () => {
    const headerString = `Create a New ${this.state.category}`
    this.setState({
      isShowing: true,
      title: '',
      description: '',
      price: '',
      itemId: '',
      category: headerString
    })
  }

  saveModalHandler = (event) => {
    const path = this.state.category.toLowerCase();
    const url = `${path}/${this.state.id}`
    apiService.editData(url)
    this.setState({
      isShowing: false,
    })
    // BAD BAD use react to update component
    window.location.reload(true);

  }

  closeModalHandler = () => {
    this.setState({
      isShowing: false,
      title: '',
      description: '',
      price: '',
      itemId: '',
      category: category
    })
  }

  deleteHandler = (id) => {
    const path = this.state.category.toLowerCase();
    const url = `${path}/${id}`
    apiService.deleteData(url)
    this.setState({
      isShowing: false,
    })
    // BAD BAD use react to update component
    window.location.reload(true);
  }

  renderTableData() {
    return this.props.data.map((item, index) => {
      const { id, title, description, price } = item //destructuring
      return (
        <tr key={id}>
          <td>{title}</td>
          <td>{description}</td>
          <td>{price}</td>
          <td className='action-col'>
            <Button variant="outline-success" className="action-buttons open-modal-btn" onClick={() => this.openEditModalHandler(item)}>Edit</Button>
            <Button variant="outline-danger" className="action-buttons" onClick={() => this.deleteHandler(item.id)}>Delete</Button>
          </td>
        </tr>
      )
    })
  }

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
            {this.renderTableData()}
          </tbody>
        </Table>

        <div>
          <Button variant="outline-success" className="action-buttons open-modal-btn" onClick={this.openNewModalHandler} block>New</Button>
        </div>

        <div>
          {this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null}

          <Modal
            className="modal"
            show={this.state.isShowing}
            close={this.closeModalHandler}
            // save={this.saveModalHandler}
            itemId={this.state.itemId}
            title={this.state.title}
            price={this.state.price}
            description={this.state.description}
            category={this.state.category} />
        </div>
      </div >
    )
  }
}

export default DisplayTable;
import React, {
  Component
} from 'react';
import { Button, Table } from 'react-bootstrap';

// TODO: fix the folder spelling
import Modal from './compoonnents/Modal';
import apiService from './services/api';
// import { async } from 'q';
let category;

class DisplayTable extends Component {
  constructor(props) {
    super(props);
    category = props.category
    this.state = {
      isShowing: false,
      newRecord: false,
      title: '',
      description: '',
      price: '',
      itemId: '',
      category,
      route: props.route,
      model: props.model
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
      category: headerString,
    })
  }

  openNewModalHandler = () => {
    this.setState({
      newRecord: true,
      isShowing: true,
      title: '',
      description: '',
      price: '',
      itemId: '',
      category: `Create a New ${this.state.category}`
    })
  }

  // Horrible name
  changeThis = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  saveModalHandler = async () => {
    this.setState({
      isShowing: false,
    })
    if (this.state.newRecord) {
      try {
        await apiService.newData(this.state)
      } catch (error) {
        console.log('Error in the create action ', error)
      }
    } else {
      try {
        await apiService.editData(this.state)
      } catch (error) {
        console.log('Error in the edit action ', error)
      }
    }
    // BAD BAD use react to update component
    // window.location.reload(true);

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

  // Feel like we should pass the item to the delete function? Not just the id
  deleteHandler = (id) => {
    const url = `${this.state.route}/${id}`
    apiService.deleteData(url)
    this.setState({
      isShowing: false,
    })
    // BAD BAD use react to update component
    // window.location.reload(true);
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
            save={this.saveModalHandler}
            itemId={this.state.itemId}
            change={this.changeThis}
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
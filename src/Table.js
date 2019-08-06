// TODO: my nav buttons no longer worker. I think it has to do with a styingthing.Button
// if I have the inspector open they work otherwise they dont
import React, {
  Component
} from 'react';
import { Button, Table } from 'react-bootstrap';

// TODO fix the folder spelling
import Modal from './compoonnents/Modal';
// import { worker } from 'cluster'; not sure where this came from??

class DisplayTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowing: false,
      title: '',
      description: '',
      price: '',
      itemId: ''
    }
  }

  editToItem(index) {
    this.setState({
      isShowing: true,
      itemToEdit: index
    })

  }

  openModalHandler(item) {
    console.log('here I am in openModalHandler', item)
    this.setState({
      isShowing: true,
      title: item.title,
      description: item.description,
      price: item.price,
      itemId: item.id
    })
  }

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    })
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
            <Button variant="outline-success" className="action-buttons open-modal-btn" onClick={() => this.openModalHandler(item)}>Edit</Button>
            {/* <Button variant="outline-success" className="action-buttons">Edit</Button> */}
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

        <Button variant="outline-success" className="action-buttons open-modal-btn" onClick={this.openModalHandler} block>New</Button>
        {/* <Button variant="outline-success" block>New</Button> */}

        <div>
          {this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null}

          {/* <Button variant="outline-success" className="open-modal-btn" onClick={this.openModalHandler}>Open Modal</Button> */}

          <Modal
            className="modal"
            show={this.state.isShowing}
            close={this.closeModalHandler}
            itemId={this.state.itemId}
            title={this.state.title}
            price={this.state.price}
            description={this.state.description} />
        </div>
      </div >
    )
  }
}

export default DisplayTable;
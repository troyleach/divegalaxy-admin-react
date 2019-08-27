import React from 'react';
import { Form } from 'react-bootstrap';


class ModalTwo extends React.Component {
  constructor(props) {
    super(props);
    console.log('props in ModalTwo', props)
    this.state = {
      show: props.isShowing,
      category: 'shit head category',
      title: 'title',

    }
    this.setTheSate = this.setTheSate.bind(this);
  }

  setTheSate = (props) => {
    console.log('here in the setTheState', props)
    this.setState({
      show: props.isShowing,
      title: props.title,
      description: '',
      price: '',
      itemId: '',
      category: 'category'
    })
  }

  closeModalHandler = () => {
    console.log('button clikcing here ass')
    this.setState({
      show: false,
      title: '',
      description: '',
      price: '',
      itemId: '',
      category: 'category'
    })
  }

  render() {
    console.log('did this shit run', this.props)
    this.setTheSate(this.props)

    return (
      <div>
        <div className="modal-wrapper"
          style={{
            transform: this.state.show ? 'translateY(-90vh)' : 'translateY(-100vh)',
            opacity: this.state.show ? '1' : '0',
            display: this.state.show ? 'block' : 'none',
          }}>
          <div className="modal-header">
            <h3>{this.state.category}</h3>
            {/* <span className="close-modal-btn" onClick={this.state.close}>×</span> */}
          </div>
          <div className="modal-body">
            <Form>
              <Form.Group controlId="formGroupTitle">
                {/* <Input title={'Title'} defaultValue={this.state.title} onChange={this.state.handleInput} /> */}
                <Form.Label>Title</Form.Label>
                <Form.Control type="input" placeholder={this.state.title || "Enter title"} />

                {/* <input type="text" value={this.state.title} onChange={this.handleChange} /> */}
                {/* <input type="text" value={this.state.title} /> */}

              </Form.Group>
              <Form.Group controlId="formGroupDescription">
                {/* <Form.Label>Description</Form.Label>
              <Form.Control type="input" placeholder={this.state.description || "Enter description"} /> */}
              </Form.Group>
              <Form.Group controlId="formGroupPrice">
                {/* <Form.Label>Price</Form.Label>
              <Form.Control type="input" placeholder={this.state.price || "Enter price"} /> */}
              </Form.Group>
            </Form>
          </div>
          <div className="modal-footer">
            <button className="btn-cancel" onClick={this.closeModalHandler}>CANCEL</button>
            <button className="btn-continue" onClick={this.state.saveModalHandler}>Save</button>
          </div>
        </div>
      </div >
    );
  }
}


export default ModalTwo;
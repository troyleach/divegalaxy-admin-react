import React from 'react';

import { Form } from 'react-bootstrap';
import './Modal.css';

// TODO: Need form validations
//  - Title required
//  - Price required
//  - Description optional
const modal = (props) => {
  return (
    <div>
      <div className="modal-wrapper"
        style={{
          transform: props.show ? 'translateY(-95vh)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0',
          display: props.show ? 'block' : 'none',
        }}>
        <div className="modal-header">
          <h3>{props.category}</h3>
          <span className="close-modal-btn" onClick={props.close}>×</span>
        </div>
        <div className="modal-body">
          <Form>
            <Form.Group controlId="formGroupTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="input" name='title' placeholder={'Enter Title'} value={props.title} onChange={props.change} />
            </Form.Group>
            <Form.Group controlId="formGroupDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control type="input" placeholder={"Enter description"} name='description' value={props.description} onChange={props.change} />
            </Form.Group>
            <Form.Group controlId="formGroupPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="input" placeholder={"Enter price"} name='price' value={props.price} onChange={props.change} />
            </Form.Group>
          </Form>
        </div>
        <div className="modal-footer">
          <button className="btn-cancel" onClick={props.close}>CANCEL</button>
          <button className="btn-continue" onClick={props.save}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default modal;
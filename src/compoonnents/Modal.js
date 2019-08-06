import React from 'react';

import './Modal.css';

const modal = (props) => {
  console.log('props', props)
  return (
    <div>
      <div className="modal-wrapper"
        style={{
          transform: props.show ? 'translateY(-90vh)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}>
        <div className="modal-header">
          <h3>Modal Header</h3>
          <span className="close-modal-btn" onClick={props.close}>×</span>
        </div>
        <div className="modal-body">
          <p>
            {props.title}
            {props.itemId}
            {props.price}
            {props.description}
          </p>
        </div>
        <div className="modal-footer">
          <button className="btn-cancel" onClick={props.close}>CLOSE</button>
          <button className="btn-continue">CONTINUE</button>
        </div>
      </div>
    </div>
  )
}

export default modal;
// import React, { Component } from 'react';

// class Modal extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: '',
//       description: '',
//       price: '',
//     }
//     this.handleSave = this.handleSave.bind(this);
//   }

//   componentWillReceiveProps(nextProps) {
//     this.setState({
//       title: nextProps.title,
//       description: nextProps.description,
//       price: nextProps.price,
//     });
//   }

//   titleHandler(e) {
//     this.setState({ title: e.target.value });
//   }

//   descriptionHandler(e) {
//     this.setState({ description: e.target.value });
//   }

//   priceHandler(e) {
//     this.setState({ price: e.target.value });
//   }

//   handleSave() {
//     const item = this.state;
//     this.props.saveModalDetails(item)
//   }

//   render() {
//     console.log('HERE in Modal props', this.props)
//     console.log('HERE in Modal state', this.state)
//     return (
//       <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h5 className="modal-title" id="exampleModalLabel">Edit Jewel</h5>
//             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//               <span aria-hidden="true">&times;</span>
//             </button>
//           </div>
//           <div className="modal-body">
//             <p><span className="modal-lable">Title:</span><input value={this.state.title} onChange={(e) => this.titleHandler(e)} /></p>
//             <p><span className="modal-lable">Description:</span><input value={this.state.description} onChange={(e) => this.descriptionHandler(e)} /></p>
//             <p><span className="modal-lable">Price:</span><input value={this.state.price} onChange={(e) => this.priceHandler(e)} /></p>
//           </div>
//           <div className="modal-footer">
//             <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//             <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave() }}>Save changes</button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Modal;

import React from 'react';

// TODO what to name this
const FormPrice = props => {
  // class FormPrice extends React.Component {
  // constructor(props) {
  //   super(props);
  //   console.log('here in the priceFrom props == ', props)
  //   this.state = {
  //     value: props.title
  //   };

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleChange(event) {
  //   this.setState({ value: event.target.value });
  // }

  // handleSubmit(event) {
  //   alert('An essay was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

  // componentDidMount() {
  //   console.log('does this ever get rendered')
  // }

  // render() {
  console.log('in the render of the thing')
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
  // }
}


export default FormPrice;
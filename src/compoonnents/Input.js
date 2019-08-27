import React from 'react';

const Input = props => {
  console.log('props => ', props)
  return (
    <div className="form-group">
      <label htmlFor={props.groupName} className="form-label">
        {props.title}
      </label>
      <input
        className="form-control"
        id={props.name}
        name={props.name}
        type={props.inputType}
        defaultValue={props.value}
        onChange={props.handleInput}
        placeholder={props.placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;
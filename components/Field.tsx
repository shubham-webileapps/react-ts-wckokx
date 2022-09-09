import React from 'react';

const Field = (props) => {
  return (
    <div className="form-group">
      <input
        className="form-control"
        id={props.name}
        type={props.type}
        placeholder={props.placeholder}
        required="required"
        data-validation-required-message="Please enter your name."
        // value={props.value}
        // onChange={e => props.onChange(e)}
        name={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      <p className="help-block text-danger">
        {props.touched && props.errors && <span> {props.errors}</span>}
      </p>
    </div>
  );
};

export default Field;

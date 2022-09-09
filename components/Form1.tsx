import React from 'react';
import { useState } from 'react';
import { withFormik } from 'formik';
import Field from './Field';
const fields = {
  sections: [
    [
      {
        name: 'name',
        elementName: 'input',
        type: 'number',
        placeholder: 'Enter Amount',
      },
    ],
  ],
};

function Form(props) {
  const [value, setValue] = useState(0);

  const handleWithdraw = (e) => {
    e.preventDefault();
    const date = new Date();
    const ndate =
      '' +
      date.getDate() +
      '-' +
      (date.getMonth() + 1) +
      '-' +
      date.getFullYear();
    if (!isNaN(parseInt(value)) && value !== 0)
      props.func(parseInt(value), ndate);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {fields.sections.map((section, i) => {
          return (
            <div className="col-md-6" key={i}>
              {section.map((field, indexField) => {
                return (
                  <div>
                    <input
                      key={field.name}
                      className="form-control"
                      id={field.name}
                      type="number"
                      // value={value}
                      placeholder={field.placeholder}
                      required="required"
                      data-validation-required-message="Please enter your name."
                      name={field.name}
                      // onChange={handleChange}
                      onBlur={props.handleBlur}
                      onFocus={props.handleFocus}
                    />
                    <p className="help-block text-danger">
                      {props.errors[field.name] ? (
                        <span> {props.errors[field.name]}</span>
                      ) : (
                        <button type="submit" onClick={handleWithdraw}>
                          {props.name}
                        </button>
                      )}
                    </p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </form>
  );
}

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
  }),
  validate: (values) => {
    const errors = {};

    Object.keys(values).map((v) => {
      if (!values[v]) {
        errors[v] = 'Its Required';
      } else {
        errors = {};
      }
    });
    return errors;
  },
  handleSubmit: (values, event) => {
    alert("you've submitted the form");
  },
})(Form);

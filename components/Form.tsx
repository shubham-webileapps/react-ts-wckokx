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
    props.func(parseInt(value));
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
                  <Field
                    {...field}
                    key={indexField}
                    value={props.values[field.name]}
                    name={field.name}
                    onchange={props.handleChange}
                    onBlur={props.handleBlur}
                    touched={props.touched[field.name]}
                    errors={props.errors[field.name]}
                  />
                );
              })}
            </div>
          );
        })}
        {/* <input
          type="number"
          min={0}
          value={value}
          placeholder="Enter Amount"
          onChange={handleChange}
          required="required"
          // name="name"
        />
        <p className="help-block text-danger">
          {props.errors && <span> {props.errors}</span>}
        </p> */}
        <button type="submit" onClick={handleWithdraw}>
          {props.name}
        </button>
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
        errors[v] = 'Required';
      }
    });
    return errors;
  },
  handleSubmit: (values, event) => {
    alert("you've submitted the form");
  },
})(Form);

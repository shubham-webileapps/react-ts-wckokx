import React, { useState } from 'react';
import { render } from 'react-dom';
import { Formik, Form as Myform, Field, ErrorMessage, getIn } from 'formik';

function getStyles(errors, fieldName) {
  if (getIn(errors, fieldName)) {
    return {
      border: '1px solid red',
    };
  }
}

function CustomInput({ field, form: { errors } }) {
  return (
    <div>
      <input {...field} style={getStyles(errors, field.name)} />
      <ErrorMessage name={field.name} />
    </div>
  );
}

const Form = (props) => {
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
    <Formik
      initialValues={{
        example: '',
      }}
      validate={(values) => {
        const errors = {};

        if (!values.example) errors.example = 'Required';

        return errors;
      }}
      onSubmit={handleWithdraw}
      render={(formProps) => {
        return (
          <Myform>
            <Field
              style={getStyles(formProps.errors, 'example')}
              type="text"
              name="example"
              value={value}
              onChange={handleChange}
            />
            <br />
            <ErrorMessage name="example" />
            <br />
            <button type="submit" onClick={handleWithdraw}>
              {props.name}
            </button>
            {/* <Field component={CustomInput} type="text" name="example" /> */}
          </Myform>
        );
      }}
    />
  );
};

export default Form;

import React, { useState } from 'react';
import { Formik, Form as Myform, Field, ErrorMessage, getIn } from 'formik';

function getStyles(errors, fieldName) {
  if (getIn(errors, fieldName)) {
    return {
      border: '1px solid red',
    };
  }
}

// function CustomInput({ field, form: { errors } }) {
//   return (
//     <div>
//       <input {...field} style={getStyles(errors, field.name)} />
//       <ErrorMessage name={field.name} />
//     </div>
//   );
// }

const Form = (props) => {
  const [value, setValue] = useState(0);
  const { showAlert } = props;
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
    if (!isNaN(parseInt(value)) && value !== 0) {
      props.func(parseInt(value), ndate);
      showAlert(props.name + ' ' + value, 'success');
    }
  };

  return (
    <Formik
      initialValues={{
        example: value,
      }}
      validate={(values) => {
        const errors = {};

        if (!values.example && values.example === 0)
          errors.example = 'Required';
        else errors.example = '';

        return errors;
      }}
      onSubmit={handleWithdraw}
      render={(formProps) => {
        return (
          <Myform className="container ">
            <div className="form-group d-flex">
              <label htmlFor="example">
                <strong>Money</strong>
              </label>

              <Field
                style={getStyles(formProps.errors, 'example')}
                className="mx-4"
                min={0}
                type="number"
                placeholder="Enter Amount"
                id="example"
                name="example"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <ErrorMessage name="example" />
            </div>
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

import React, { useState } from 'react';
import { Formik, Form as MyForm, Field, getIn, ErrorMessage } from 'formik';
import TextField from '@mui/material/TextField';
function getStyles(errors, fieldName) {
  if (getIn(errors, fieldName)) {
    return {
      border: '1px solid red',
    };
  }
}

function validateAmount(value) {
  let error;
  if (!value) {
    error = 'Required';
  }
  return error;
}

function validateUsername(value) {
  let error;
  if (value === 'admin') {
    error = 'Nice try!';
  }
  return error;
}

const Form = (props) => {
  const [value, setValue] = useState(0);
  const { showAlert } = props;
  const handleWithdraw = () => {
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
    <div>
      <h1>Money Handler</h1>
      <Formik
        initialValues={{
          amount: 0,
        }}
        onSubmit={(values) => {
          const date = new Date();
          const ndate =
            '' +
            date.getDate() +
            '-' +
            (date.getMonth() + 1) +
            '-' +
            date.getFullYear();
          if (!isNaN(parseInt(values.amount)) && values.amount !== 0) {
            props.func(parseInt(values.amount), ndate);
            showAlert(props.name + ' ' + values.amount, 'success');
          }
        }}
      >
        {({ errors, touched, isValidating }) => (
          <MyForm>
            <div className="col-md-12 mb-3">
              <div className="input-group">
                {/* <TextField
                  error={validateAmount}
                  label="Amount"
                  style={getStyles(errors, 'amount')}
                  className=" form-control"
                  name="amount"
                  id="amount"
                  
                  aria-describedby="inputGroupPrepend2"
                  // validate={validateAmount}
                  type="number"
                  min={0}
                  variant="standard"
                /> */}
                <Field
                  style={getStyles(errors, 'amount')}
                  className=" form-control"
                  name="amount"
                  id="amount"
                  aria-describedby="inputGroupPrepend2"
                  validate={validateAmount}
                  type="number"
                  placeholder="Enter Amount"
                  min={0}
                  variant="standard"
                />
              </div>
            </div>

            {/* <ErrorMessage name="amount" /> */}
            {errors.amount && touched.amount && <div>{errors.amount}</div>}
            <br />
            <button
              type="submit"
              className={`btn btn-${
                props.name === 'Deposit' ? 'success' : 'danger'
              }`}
            >
              {props.name}
            </button>
          </MyForm>
        )}
      </Formik>
    </div>
  );
};
export default Form;

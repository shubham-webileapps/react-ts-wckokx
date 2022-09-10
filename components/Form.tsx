import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from './state/index';
import { bindActionCreators } from 'redux';
import {
  Formik,
  Form as MyForm,
  Field as MField,
  getIn,
  ErrorMessage,
} from 'formik';
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
    error = ' Its Required';
  }
  return error;
}

const Form = (props) => {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
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
      if (props.name === 'Withdraw') withdrawMoney(parseInt(value), ndate);
      if (props.name === 'Deposit') depositMoney(parseInt(value), ndate);
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
            date.getDate() +
            '-' +
            (date.getMonth() + 1) +
            '-' +
            date.getFullYear();
          if (!isNaN(parseInt(values.amount)) && values.amount !== 0) {
            if (props.name === 'Withdraw')
              withdrawMoney(parseInt(values.amount), ndate);
            if (props.name === 'Deposit')
              depositMoney(parseInt(values.amount), ndate);
            showAlert(props.name + ' ' + values.amount, 'success');
          }
        }}
      >
        {({ errors, touched, isValidating, handleChange, amount }) => (
          <MyForm>
            <div className="col-md-12 mb-3">
              <div className="input-group">
                <MField
                  // style={getStyles(errors, 'amount')}
                  className=" form-control"
                  name="amount"
                  id="amount"
                  aria-describedby="inputGroupPrepend2"
                  validate={validateAmount}
                  type="number"
                  placeholder="Enter Amount"
                  min={0}
                  component={TextField}
                  variant="standard"
                  // value={20}
                  onChange={handleChange}
                  helperText={errors.amount}
                  // {!errors.amount}
                  // error
                />
              </div>
            </div>

            {/* <ErrorMessage name="amount" /> */}
            {/* {errors.amount && touched.amount && <div>{errors.amount}</div>} */}
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

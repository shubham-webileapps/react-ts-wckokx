import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from './state/index';
import { bindActionCreators } from 'redux';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import InputAdornment from '@mui/material/InputAdornment';
import {
  Formik,
  Form as MyForm,
  Field as MField,
  getIn,
  ErrorMessage,
} from 'formik';
import TextField from '@mui/material/TextField';
import { useSnackbar } from 'notistack';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

// function getStyles(errors, fieldName) {
//   if (getIn(errors, fieldName)) {
//     return {
//       border: '1px solid red',
//     };
//   }
// }
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

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
  const { enqueueSnackbar } = useSnackbar();

  // const handleWithdraw = () => {
  //   const date = new Date();
  //   const ndate =
  //     '' +
  //     date.getDate() +
  //     '-' +
  //     (date.getMonth() + 1) +
  //     '-' +
  //     date.getFullYear();
  //   if (!isNaN(parseInt(value)) && value !== 0) {
  //     if (props.name === 'Withdraw') withdrawMoney(parseInt(value), ndate);
  //     if (props.name === 'Deposit') depositMoney(parseInt(value), ndate);
  //     enqueueSnackbar(props.name + ' ' + value + ' success');
  //   }
  // };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Card container spacing={2}>
        {/* <Grid item xs={12}>
          Money Handler
        </Grid> */}
      </Card>
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
            enqueueSnackbar(props.name + ' ' + values.amount + ' success');
          }
        }}
      >
        {({ errors, touched, isValidating, handleChange }) => (
          <MyForm>
            <Card>
              <MField
                className=" form-control"
                name="amount"
                id="amount"
                label="Amount"
                aria-describedby="inputGroupPrepend2"
                validate={validateAmount}
                type="number"
                placeholder="Enter Amount"
                min={0}
                component={TextField}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CurrencyRupeeIcon />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                // value={20}
                onChange={handleChange}
                helperText={errors.amount}
                // {!errors.amount}
                // error
              />
            </Card>

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
    </Box>
  );
};
export default Form;

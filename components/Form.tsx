import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from './state/index';
import { bindActionCreators } from 'redux';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import InputAdornment from '@mui/material/InputAdornment';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  Formik,
  Form as MyForm,
  Field as MField,
  getIn,
  ErrorMessage,
} from 'formik';
import TextField from '@mui/material/TextField';
import { useSnackbar } from 'notistack';

// function getStyles(errors, fieldName) {
//   if (getIn(errors, fieldName)) {
//     return {
//       border: '1px solid red',
//     };
//   }
// }

function validateAmount(value) {
  let error;
  if (!value) {
    error = ' Its Required';
  }
  return error;
}

const Form = (props) => {
  const { name } = props;
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
        <Formik
          initialValues={{
            amount: 0,
          }}
          onSubmit={(values, actions) => {
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
            actions.resetForm({
              values: {
                amount: 0,
              },
            });
          }}
        >
          {(props) => (
            <MyForm>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name} Form
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <MField
                    className=" form-control"
                    name="amount"
                    id="amount"
                    label="Amount"
                    aria-describedby="inputGroupPrepend2"
                    validate={validateAmount}
                    type="number"
                    placeholder="100"
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
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.amount}
                    helperText={props.errors.amount}
                    // {!errors.amount}
                    // error
                  />

                  {/* <ErrorMessage name="amount" /> */}
                  {/* {errors.amount && touched.amount && <div>{errors.amount}</div>} */}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: 'red' }} type="submit">
                  {name}
                </Button>
              </CardActions>
            </MyForm>
          )}
        </Formik>
      </Card>
    </Box>
  );
};
export default Form;

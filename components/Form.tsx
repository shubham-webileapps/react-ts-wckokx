import React from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from './state/index';
import { bindActionCreators } from 'redux';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import {
  Button,
  Box,
  CardContent,
  CardActions,
  Card,
  InputAdornment,
  Typography,
  TextField,
} from '@mui/material';
import { Formik, Form as MyForm, Field } from 'formik';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

function validateAmount(value) {
  let error;
  if (!value || value < 1) {
    error = 'Amount should be greater then 0 ';
  }
  return error;
}

const Form = (props) => {
  const { name } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const { enqueueSnackbar } = useSnackbar();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Card container="true" spacing={2}>
        <Formik
          initialValues={{
            amount: 0,
          }}
          onSubmit={(values, actions) => {
            if (!isNaN(parseInt(values.amount)) && values.amount !== 0) {
              if (props.name === 'Withdraw')
                withdrawMoney(parseInt(values.amount));
              if (props.name === 'Deposit')
                depositMoney(parseInt(values.amount));
              enqueueSnackbar(props.name + ' ' + values.amount + ' success');
              //navigate to home
              navigate('/');
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
                <Typography gutterBottom variant="h5" component="span">
                  {name} Form
                </Typography>
                <Typography
                  variant="body2"
                  component="div"
                  color="text.secondary"
                >
                  <Field
                    // className=" form-control"
                    name="amount"
                    id="amount"
                    label="Amount"
                    aria-describedby="inputGroupPrepend2"
                    validate={validateAmount}
                    type="number"
                    placeholder="100"
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
                      inputProps: { min: 0 },
                    }}
                    variant="standard"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    helperText={props.errors.amount}
                    required
                    error={!!props.errors.amount}
                  />
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

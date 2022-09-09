// import React, { useState } from 'react';
// import { Formik, Form as Myform, Field, ErrorMessage, getIn } from 'formik';

//
// const Form = (props) => {
//   const [value, setValue] = useState(0);
//   const { showAlert } = props;
//   const handleWithdraw = (e) => {
//     e.preventDefault();
//     const date = new Date();
//     const ndate =
//       '' +
//       date.getDate() +
//       '-' +
//       (date.getMonth() + 1) +
//       '-' +
//       date.getFullYear();
//     if (!isNaN(parseInt(value)) && value !== 0) {
//       props.func(parseInt(value), ndate);
//       showAlert(props.name + ' ' + value, 'success');
//     }
//   };

//   return (
//     <Formik
//       validateOnChange
//       initialValues={{
//         amount: value,
//       }}
//       validate={(values) => {
//         const errors = {};

//         if (!values.amount && values.amount === 0) errors.amount = 'Required';
//         else errors.amount = '';

//         return errors;
//       }}
//       onSubmit={handleWithdraw}
//       render={(formProps, handleChange) => {
//         return (
//           <Myform className="container ">
//             <div className="form-group d-flex">
//               <label htmlFor="amount">
//                 <strong>Money</strong>
//               </label>

//               <Field
//                 style={getStyles(formProps.errors, 'amount')}
//                 className="mx-4"
//                 min={0}
//                 type="number"
//                 placeholder="Enter Amount"
//                 id="amount"
//                 name="amount"
//                 value={value}
//                 onChange={handleChange}
//               />
//               <ErrorMessage name="amount" />
//             </div>
//             <br />
//             <button type="submit" onClick={handleWithdraw}>
//               {props.name}
//             </button>
//           </Myform>
//         );
//       }}
//     />
//   );
// };

// export default Form;
import React, { useState } from 'react';
import { Formik, Form as MyForm, Field, getIn, ErrorMessage } from 'formik';
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
            <div class="col-md-12 mb-3">
              <label for="amount">Amount</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroupPrepend2">
                    Rs
                  </span>
                </div>

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
                />
              </div>
            </div>

            <ErrorMessage name="amount" />
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

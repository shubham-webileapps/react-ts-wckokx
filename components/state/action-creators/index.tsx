export const depositMoney = (amount, date) => {
  return (dispatch) => {
    dispatch({
      type: 'deposit',
      payload: amount,
      date: date,
    });
  };
};
export const withdrawMoney = (amount, date) => {
  return (dispatch) => {
    dispatch({
      type: 'withdraw',
      payload: amount,
      date: date,
    });
  };
};

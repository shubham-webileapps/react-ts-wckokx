const statement = [
  { amount: 5000, type: 'deposit', total: 5000, date: '08-09-2022' },
];
const date = new Date();
const ndate =
  date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
const reducer = (state = 5000, action) => {
  if (action.type === 'deposit') {
    state = statement[statement.length - 1].total + action.payload;
    statement.push({
      amount: action.payload,
      type: action.type,
      total: state,
      // date: action.date,
      date: ndate,
    });
    return statement;
    // return state;
  } else if (action.type === 'withdraw') {
    state = statement[statement.length - 1].total - action.payload;
    statement.push({
      amount: action.payload,
      type: action.type,
      total: state,
      // date: action.date,
      date: ndate,
    });
    return statement;
    // return state;
  } else {
    return statement;
    // return state;
  }
};
export default reducer;

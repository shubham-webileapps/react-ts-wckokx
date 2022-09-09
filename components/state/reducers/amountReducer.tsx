const statement = [{ amount: 5000, type: 'deposit', total: 5000 }];
const reducer = (state = 5000, action) => {
  if (action.type === 'deposit') {
    state = statement[statement.length - 1].total + action.payload;
    statement.push({
      amount: action.payload,
      type: action.type,
      total: state,
    });
    return statement;
    // return state;
  } else if (action.type === 'withdraw') {
    state = statement[statement.length - 1].total - action.payload;
    statement.push({
      amount: action.payload,
      type: action.type,
      total: state,
    });
    return statement;
    // return state;
  } else {
    return statement;
    // return state;
  }
};
export default reducer;

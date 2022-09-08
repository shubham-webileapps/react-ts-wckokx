import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';
const MoneyHandler = () => {
  const amount = useSelector((state) => state.amount);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Deposit/Withdraw money</h2>
      <h3> your balance is: {amount}</h3>
      <button
        className="btn btn-primary mx-2"
        onClick={() => dispatch(actionCreators.depositMoney(100))}
      >
        Deposit
      </button>
      <button
        className="btn btn-primary mx-2"
        onClick={() => dispatch(actionCreators.withdrawMoney(100))}
      >
        Withdraw
      </button>
      <button className="btn btn-primary mx-2">Statement</button>
    </div>
  );
};
export default MoneyHandler;

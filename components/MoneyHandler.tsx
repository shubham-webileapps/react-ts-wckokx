import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MoneyHandler = () => {
  const amount = useSelector((state) => state.amount);

  return (
    <div className="card">
      <h5 className="card-header">Deposit/Withdraw money</h5>
      <div className="card-body">
        <h5 className="card-title">
          your balance is: {amount[amount.length - 1].total}
        </h5>
        <Link className="mx-2" to="/Deposit">
          Deposit
        </Link>
        <Link className="mx-2" to="/Withdraw">
          Withdraw
        </Link>
        <Link className="mx-2" to="/Statement">
          Statement
        </Link>
      </div>
    </div>
  );
};
export default MoneyHandler;

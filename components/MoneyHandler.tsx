import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MoneyHandler = () => {
  const amount = useSelector((state) => state.amount);

  return (
    <div>
      <h2>Deposit/Withdraw money</h2>
      <h3> your balance is: {amount[amount.length - 1].total}</h3>
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
  );
};
export default MoneyHandler;

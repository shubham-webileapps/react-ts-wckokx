import React from 'react';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';

// import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
const MoneyHandler = () => {
  const amount = useSelector((state) => state.amount);

  return (
    <div className="card">
      <h5 className="card-header">Deposit/Withdraw money</h5>
      <div className="card-body">
        <h5 className="card-title">
          your balance is: {amount[amount.length - 1].total}
        </h5>
        <Link component={RouterLink} className="mx-2" to="/Deposit">
          Deposit
        </Link>
        <Link component={RouterLink} className="mx-2" to="/Withdraw">
          Withdraw
        </Link>
        <Link component={RouterLink} className="mx-2" to="/Statement">
          Statement
        </Link>
      </div>
    </div>
  );
};
export default MoneyHandler;

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Statement() {
  const statement = useSelector((state) => state.amount);
  return (
    <div>
      <h1>Statement</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Mode</th>
            <th scope="col">Amount</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {statement.map((value, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{value.date}</td>
                <td>{value.type}</td>
                <td>{value.amount}</td>
                <td>{value.total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link className="mx-2" to="/Deposit">
        Deposit
      </Link>
      <Link className="mx-2" to="/Withdraw">
        Withdraw
      </Link>
    </div>
  );
}

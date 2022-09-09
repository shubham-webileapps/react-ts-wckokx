import React from 'react';
import { useSelector } from 'react-redux';
export default function Statement() {
  const statement = useSelector((state) => state.amount);
  return (
    <div>
      <h1>Statement</h1>
      <table>
        <thead>
          <tr>
            {/* <th>Date</th> */}
            <th>Mode</th>
            <th>Amount</th>
            <th>Total</th>
            <th>Date</th>
          </tr>
        </thead>
        {statement.map((value, index) => {
          return (
            <tbody key={index}>
              <tr>
                <th>{value.type}</th>
                <th>{value.amount}</th>
                <th>{value.total}</th>
                <th>{value.date}</th>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

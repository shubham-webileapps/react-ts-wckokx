import * as React from 'react';
import Navbar from './components/Navbar';
import MoneyHandler from './components/MoneyHandler';
import Statement from './components/Statement';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import { bindActionCreators } from 'redux';
import { actionCreators } from './components/state/index';
import { useDispatch } from 'react-redux';

export default function App() {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<MoneyHandler />}></Route>
          <Route exact path="/Statement" element={<Statement />}></Route>
          <Route
            exact
            path="/Withdraw"
            element={<Form func={withdrawMoney} name="Withdraw" />}
          ></Route>
          <Route
            exact
            path="/Deposit"
            element={<Form func={depositMoney} name="Deposit" />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

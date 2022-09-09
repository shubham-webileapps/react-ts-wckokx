import * as React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import MoneyHandler from './components/MoneyHandler';
import Statement from './components/Statement';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import { bindActionCreators } from 'redux';
import { actionCreators } from './components/state/index';
import Alert from './components/Alert';
import { useDispatch } from 'react-redux';

export default function App() {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
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
            element={
              <Form
                func={withdrawMoney}
                name="Withdraw"
                showAlert={showAlert}
              />
            }
          ></Route>
          <Route
            exact
            path="/Deposit"
            element={
              <Form func={depositMoney} name="Deposit" showAlert={showAlert} />
            }
          ></Route>
        </Routes>
      </Router>
      <Alert alert={alert} />
    </div>
  );
}

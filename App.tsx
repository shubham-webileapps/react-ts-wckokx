import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import Navbar from './components/Navbar';
import MoneyHandler from './components/MoneyHandler';
import Statement from './components/Statement';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Alert from './components/Alert';

export default function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 500);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Box>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<MoneyHandler />}></Route>
              <Route exact path="/Statement" element={<Statement />}></Route>
              <Route
                exact
                path="/Withdraw"
                element={<Form name="Withdraw" showAlert={showAlert} />}
              ></Route>
              <Route
                exact
                path="/Deposit"
                element={<Form name="Deposit" showAlert={showAlert} />}
              ></Route>
            </Routes>
          </Router>
          <Alert alert={alert} />
        </Box>
      </Container>
    </React.Fragment>
  );
}

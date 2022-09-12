import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import MoneyHandler from './components/MoneyHandler';
import Statement from './components/Statement';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './components/Form';

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box>
        <Container>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<MoneyHandler />}></Route>
              <Route exact path="/Statement" element={<Statement />}></Route>
              <Route
                exact
                path="/Withdraw"
                element={<Form name="Withdraw" />}
              ></Route>
              <Route
                exact
                path="/Deposit"
                element={<Form name="Deposit" />}
              ></Route>
            </Routes>
          </Router>
        </Container>
      </Box>
    </React.Fragment>
  );
}

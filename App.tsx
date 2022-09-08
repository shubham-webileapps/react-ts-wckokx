import * as React from 'react';
import Navbar from './components/Navbar';
import MoneyHandler from './components/MoneyHandler';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/"></Route>
        </Routes>
      </Router>
      <MoneyHandler />
    </div>
  );
}

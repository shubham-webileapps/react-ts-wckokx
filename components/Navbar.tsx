import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              My bank
            </Link>
          </div>
          {/* <div style={{ color: 'white' }}>Your balance:0</div> */}
        </nav>
      </div>
    );
  }
}

export default Navbar;

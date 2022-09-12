import * as React from 'react';
import { AppBar, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Button
        // className="navbar-brand d-flex justify-content-start"
        component={Link}
        to="/"
      >
        <AccountBalanceIcon
          sx={{
            display: { xs: 'none', color: 'white', md: 'flex' },
            mr: 1,
          }}
        />

        <Typography
          variant="h6"
          noWrap
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex', color: 'white' },
            hover: { color: 'white' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          My Bank
        </Typography>
        {/* </Button>
      <Button
        className="navbar-brand d-flex justify-content-start"
        component={Link}
        to="/"
      > */}
        <AccountBalanceIcon
          sx={{
            display: { xs: 'flex', md: 'none', color: 'white' },
            mr: 1,
          }}
        />

        <Typography
          variant="h5"
          noWrap
          sx={{
            mr: 2,
            display: { xs: 'flex', color: 'white', md: 'none' },
            hover: { color: 'white' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          My Bank
        </Typography>
      </Button>
    </AppBar>
  );
};
export default Navbar;

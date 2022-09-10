import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link as RouterLink } from 'react-router-dom';
// import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Button
          className="navbar-brand d-flex justify-content-start"
          component={RouterLink}
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
            // component={Button}
            // underline="none"
            // to="/"
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
        </Button>
        <Button
          className="navbar-brand d-flex justify-content-start"
          component={RouterLink}
          to="/"
        >
          <AccountBalanceIcon
            sx={{
              display: { xs: 'flex', md: 'none', color: 'white' },
              mr: 1,
            }}
          />

          <Typography
            variant="h5"
            noWrap
            // component={Button}
            // underline="none"
            // to="/"
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
      </Container>
    </AppBar>
  );
};
export default Navbar;

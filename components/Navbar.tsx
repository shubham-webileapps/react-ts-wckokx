import * as React from 'react';
import AppBar from '@mui/material/AppBar';
// import { Link } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link
            className="navbar-brand d-flex justify-content-start"
            component={RouterLink}
            to="/"
          >
            <AdbIcon
              sx={{
                display: { xs: 'none', color: 'white', md: 'flex' },
                mr: 1,
              }}
            />
          </Link>
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            underline="none"
            to="/"
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

          <Link
            className="navbar-brand d-flex justify-content-start"
            component={RouterLink}
            to="/"
          >
            <AdbIcon
              sx={{
                display: { xs: 'flex', md: 'none', color: 'white' },
                mr: 1,
              }}
            />
          </Link>
          <Typography
            variant="h5"
            noWrap
            component={RouterLink}
            underline="none"
            to="/"
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;

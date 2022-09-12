import React from 'react';
import { AppBar, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button
            component={Link}
            to="/"
            sx={{
              display: { xs: 'flex', color: 'white' },
              mr: 1,
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              // sx={{ mr: 2 }}
            >
              <AccountBalanceIcon />
              <Typography
                variant="h5"
                color="inherit"
                component="div"
                sx={{ ml: '10px' }}
              >
                My Bank
              </Typography>
            </IconButton>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

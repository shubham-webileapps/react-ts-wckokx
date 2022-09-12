import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button,
  Box,
  CardContent,
  CardActions,
  Card,
  Typography,
} from '@mui/material';
const MoneyHandler = () => {
  const amount = useSelector((state) => state.amount);

  return (
    <Box>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Deposit/Withdraw money
          </Typography>
          <Typography variant="h5" color="text.primary">
            your balance is: {amount[amount.length - 1].total}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            component={Link}
            size="small"
            sx={{ color: 'red' }}
            to="/Deposit"
          >
            Deposit
          </Button>
          <Button
            component={Link}
            size="small"
            sx={{ color: 'red' }}
            to="/Withdraw"
          >
            Withdraw
          </Button>
          <Button
            component={Link}
            size="small"
            sx={{ color: 'red' }}
            to="/Statement"
          >
            Statement
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
export default MoneyHandler;

import * as React from 'react';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import {
  Paper,
  Button,
  Box,
  CardContent,
  CardActions,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';

interface Column {
  id: 'date' | 'mode' | 'amount' | 'total';
  label: string;
  minWidth?: number;
  align?: 'left';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'date', label: 'Date', minWidth: 100 },
  {
    id: 'type',
    label: 'Mode',
    minWidth: 170,
    align: 'left',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'amount',
    label: 'Amount',
    minWidth: 170,
    align: 'left',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'total',
    label: 'Total',
    minWidth: 170,
    align: 'left',
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  date: string;
  type: string;
  amount: number;
  total: number;
}

function createData(
  date: string,
  type: string,
  amount: number,
  total: number
): Data {
  return { date, type, amount, total };
}

export default function Statement() {
  const statement = useSelector((state) => state.amount);
  const rows = statement;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%' }}>
      <Box>
        <Card>
          <CardContent>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ minWidth: 10 }}>#</TableCell>
                    {columns.map((column, index) => (
                      <TableCell key={index} style={{ minWidth: 10 }}>
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={index}
                        >
                          <TableCell align="left">{index + 1}</TableCell>
                          {columns.map((column, i) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={i} align={column.align}>
                                {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </CardContent>
          <CardActions>
            <Button
              component={RouterLink}
              size="small"
              sx={{ color: 'red' }}
              to="/Deposit"
            >
              Deposit
            </Button>
            <Button
              component={RouterLink}
              size="small"
              sx={{ color: 'red' }}
              to="/Withdraw"
            >
              Withdraw
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Paper>
  );
}

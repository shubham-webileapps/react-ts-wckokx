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
  id: 'key' | 'date' | 'mode' | 'amount' | 'total';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'key', label: '#', minWidth: 20 },
  { id: 'date', label: 'Date', minWidth: 100 },
  {
    id: 'mode',
    label: 'Mode',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'amount',
    label: 'Amount',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'total',
    label: 'Total',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  key: number;
  date: string;
  mode: string;
  amount: number;
  total: number;
}

function createData(
  key: number,
  date: string,
  mode: string,
  amount: number,
  total: number
): Data {
  return { key, date, mode, amount, total };
}

export default function Statement() {
  const statement = useSelector((state) => state.amount);
  const rows = [];
  statement.map((value, index) =>
    rows.push(
      // (key = index),
      createData(index + 1, value.date, value.type, value.amount, value.total)
    )
  );
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
                    {columns.map((column) => (
                      <TableCell key={column.id} style={{ minWidth: 10 }}>
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
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

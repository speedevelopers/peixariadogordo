import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';




const columns = [
  { id: 'name', label: 'Nome', minWidth: 200},
  { id: 'code', label: 'Endereço', minWidth: 100 },
  {
    id: 'population',
    label: 'WhatsApp',
    minWidth: 100,
    align: 'right',
    format: (Number),        
  },



];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('Restaurante Casa Verde', 'IN', 985928432),
  createData('Restaurante 1008', 'CN', 1403500365),
  createData('Churrascaria Gramado', 'IT', 60483973),
  createData('Coco Bambu', 'US', 327167434),
  createData('Canada', 'CA', 37602103),
  createData('Australia', 'AU', 25475400),
  createData('Germany', 'DE', 83019200),
  createData('Ireland', 'IE', 4857000),
  createData('Mexico', 'MX', 126577691),
  createData('Japan', 'JP', 126317000),
  createData('France', 'FR', 67022000),
  createData('United Kingdom', 'GB', 67545757),
  createData('Russia', 'RU', 146793744),
  createData('Nigeria', 'NG', 200962417),
  createData('Brazil', 'BR', 210147125),
 
];

const useStyles = makeStyles({            //Settings width and height of table
  root: {
    width: '100%',      
  },
  container: {
    maxHeight: 440,
  },  

}); 

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}                                   
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
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
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
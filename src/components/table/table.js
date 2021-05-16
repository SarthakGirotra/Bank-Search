import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { useSelector } from "react-redux"
import { addFav } from "../../actions/fav"
import { useDispatch } from "react-redux"
import "./table.css"
import { Link } from 'react-router-dom';
const columns = [
    { id: 'ifsc', label: 'IFSC', minWidth: 170 },
    { id: 'bank_id', label: 'BankID', minWidth: 100 },
    {
        id: 'branch',
        label: 'Branch',
        minWidth: 100,
        align: 'right',
    },
    {
        id: 'address',
        label: 'Address',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'fav',
        label: 'Favorite',
        minWidth: 50,
        align: 'right',
    },
    {
        id: 'city',
        label: 'City',
        minWidth: 100,
        align: 'right',
    },
    {
        id: 'bank_name',
        label: 'Bank Name',
        minWidth: 170,
        align: 'right',
    },
];


const useStyles = makeStyles({
    root: {
        width: '95%',
        margin: 'auto',


    },
    container: {
        maxHeight: 740,
        color: 'white',

    },
});

const TableData = ({ data }) => {
    const filter = useSelector((state) => state.filter).trim()
    const fav = useSelector((state) => state.fav)
    const dispatch = useDispatch()
    let filteredData =
        filter === "" ? data :
            data.filter(data_row => {
                return columns.filter((col) => col.id !== "fav").map(col =>
                    data_row[col.id]).some((col_data) => col_data.toString().toLowerCase().includes(filter))

            })


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
    const handleSwitch = (e) => {
        dispatch(addFav(e))

    }

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
                        {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={data.ifsc} >
                                    {columns.map((column) => {
                                        const value = data[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {  column.id === "ifsc" ? <Link to={`/Bank-Search/${data[column.id]}`} className="ifsc">{value}</Link> :
                                                    column.id === 'fav' ?

                                                        <label className="switch">
                                                            <input type="checkbox" checked={fav?.hasOwnProperty(data.ifsc)} onChange={(e) => { handleSwitch(data.ifsc) }} />
                                                            <span className="slider round"></span>
                                                        </label> : column.format && typeof value === 'number' ? column.format(value) : value
                                                }
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
                count={filteredData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default TableData;
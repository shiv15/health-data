import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, calories, fat, carbs, protein) {

    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function HealthTable() {
    const classes = useStyles();

    const [data, setData] = useState({ hits: [] });

    useEffect(async () => {
        const result = await axios(
            'https://fitbit-dat.herokuapp.com/1',
        );
        console.log(result.data);
        setData(result.data);
        console.log(data);
    }, []);
    console.log(data[0]);
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Steps</TableCell>
                        <TableCell align="right">Distance</TableCell>
                        <TableCell align="right">Minutes_sitting</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((dataPerDay) => (
                        <TableRow key={dataPerDay.Date}>
                            <TableCell component="th" scope="row">
                                {dataPerDay.Date}
                            </TableCell>
                            <TableCell align="right">{dataPerDay.Calories}</TableCell>
                            <TableCell align="right">{dataPerDay.Steps}</TableCell>
                            <TableCell align="right">{dataPerDay.Distance}</TableCell>
                            <TableCell align="right">{dataPerDay.Minutes_sitting}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

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

export default function HealthTable({user_id}) {
    const classes = useStyles();

    const [data, setData] = useState();
    console.log(user_id);
    // useEffect(async () => {
        // window.addEventListener('load', () => this.handleLoad());
        const result = axios(
            `https://fitbit-dat.herokuapp.com/${user_id}`,
        ).then((result)=>{
            setData(result.data);
        })
    // }, []);

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
                        <TableCell align="right">Minutes_of_slow_activity</TableCell>
                        <TableCell align="right">Minutes_of_moderate_activity</TableCell>
                        <TableCell align="right">Minutes_of_intense_activity</TableCell>
                        <TableCell align="right">Calories_Activity</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { data ? data.map((dataPerDay) => (
                        <TableRow key={dataPerDay.Date}>
                            <TableCell component="th" scope="row">
                                {dataPerDay.Date}
                            </TableCell>
                            <TableCell align="right">{dataPerDay.Calories}</TableCell>
                            <TableCell align="right">{dataPerDay.Steps}</TableCell>
                            <TableCell align="right">{dataPerDay.Distance}</TableCell>
                            <TableCell align="right">{dataPerDay.Minutes_sitting}</TableCell>
                            <TableCell align="right">{dataPerDay.Minutes_of_slow_activity}</TableCell>
                            <TableCell align="right">{dataPerDay.Minutes_of_moderate_activity}</TableCell>
                            <TableCell align="right">{dataPerDay.Minutes_of_intense_activity}</TableCell>
                            <TableCell align="right">{dataPerDay.Calories_Activity}</TableCell>
                        </TableRow>
                    )) : <TableRow>
                        <TableCell component="th" scope="row">
                            null
                        </TableCell>
                        <TableCell align="right">null</TableCell>
                        <TableCell align="right">null</TableCell>
                        <TableCell align="right">null</TableCell>
                        <TableCell align="right">null</TableCell>
                        <TableCell align="right">null</TableCell>
                        <TableCell align="right">null</TableCell>
                        <TableCell align="right">null</TableCell>
                        <TableCell align="right">null</TableCell>
                    </TableRow>}
                </TableBody>
            </Table>
        </TableContainer>
    );

}

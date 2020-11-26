import Typography from "@material-ui/core/Typography";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import HealthTable from "./UserHealthInfo";

const drawerWidth = 240;



const useStyles = makeStyles((theme) => ({

    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(2),
        paddingLeft: theme.spacing(3)
    },
}));

export default function HomeScreen() {
    const classes = useStyles();

    return (<main className={classes.content}>
        <div className={classes.toolbar}/>
        <>
        <h1>Summary</h1>
        <HealthTable />
        </>
    </main>);
}
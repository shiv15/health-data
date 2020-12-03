import Typography from "@material-ui/core/Typography";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import HealthTable from "./UserHealthInfo";
import UserSearch from "./UserSearch";

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

export default function HomeScreen({getUid}) {
    const classes = useStyles();
    const id = 3;
    const[userId, setUserId] = useState(null);
    () => getUid(uid)
    return (<main className={classes.content}>
        <div className={classes.toolbar}/>
        <>
            <UserSearch getId={uid => setUserId(uid)}/>
            <h1>Summary</h1>
            {userId ? <HealthTable user_id={userId}/> : <p>Waiting for response</p>}
        </>
    </main>);
}
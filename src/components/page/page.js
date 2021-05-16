import React from 'react';
import { useSelector } from "react-redux"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',

        '& > *': {
            margin: theme.spacing(15),
            width: theme.spacing(60),
        },
    },
}));

function Page({ match }) {
    const classes = useStyles();
    const { params: { ifsc } } = match;
    const data = useSelector((state) => state.banks)
    const bank = data.filter((d) => {
        return d['ifsc'] === ifsc


    }

    )
    return (
        <div className={classes.root}>
            {bank[0] && (

                <Paper style={{ backgroundColor: "#eeeeee" }} elevation={3}>
                    <h2>{bank[0]?.bank_name}</h2>
                    <h2>Bank ID:{" "}{bank[0]?.bank_id}</h2>
                    <h3>IFSC:{" "} {bank[0]?.ifsc}</h3>
                    <h5>{bank[0]?.address}</h5>
                </Paper>

            )
            }


        </div>
    );
}

export default Page;
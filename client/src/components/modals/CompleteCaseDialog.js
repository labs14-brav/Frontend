/**
 * Dependencies
 */

import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Button } from "@material-ui/core";
import axioswithAuth from '../../helpers/axioswithAuth';

/**
 * Define styles
 */

const useStyles = makeStyles(theme => ({
    dialog: {
        width: '400px',
        margin: '0 auto',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2),
        outline: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
    },
    title: {
        paddingBottom: '10px',
        textAlign: "center",
    },
    body: {
        paddingBottom: '20px',
    },
}))

/**
 * Define modal
 */

function CompleteCaseDialog(props) {
    const classes = useStyles();
    const { onClose, open, caseId} = props;

    function handleClose() {
        onClose();
    }

    function handleSubmit() {
        console.log('Case id', caseId);
        axioswithAuth()
        .put(`/cases/${caseId}/case-request-completed`)
        .then((res) => {
            console.log(res);
            handleClose();
        })
        .catch((err) => {
            console.log(err);
       });
       
    };

    return (
        <Dialog open={open} onClose={handleClose} className={classes.dialog}>
            <div className={classes.paper}>
                <Typography className={classes.title} variant="h6">Are you sure you want to complete this case?</Typography>
                <Button onClick={handleSubmit} variant="outlined"> Yes, complete the case. </Button>
            </div>
        </Dialog>
    )
}

/**
 * Export modal
 */

 export default CompleteCaseDialog;
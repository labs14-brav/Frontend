import React from 'react';


import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/makeStyles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    paybutton: {
        marginLeft: '10px',
        padding: '10px',
        color: '#5C90C1',
    }
}))


function PayInvoiceButton(props) {
    const classes = useStyles();


//conditionally render button based on whether the invoice has been paid or not.
    if( false) {
        return(
            <>
               <Typography> Invoice paid </Typography>
            </>
            )
    } else {
        return (
           <Button variant="outlined" className={classes.paybutton}>
               Pay Invoice
           </Button>
        )
    }


    
}


export default PayInvoiceButton;
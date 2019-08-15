import React from 'react';
import moment from 'moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faMoneyBill} from '@fortawesome/free-solid-svg-icons';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    paybutton: {
        margin: '0 auto',
        padding: '10px',
        color: '#5C90C1',
        width: '150px',
        borderColor: "#5C90C1",
    },
    paidtext: {
        margin: '0 auto',
    },
    paidcontainer: {
        margin: '0 auto',
    }
}))


function PayInvoiceButton(props) {
    const classes = useStyles();

    const timeStamp = moment(props.invoice.paid_at, "YYYY-MM-DD").format(
        "MMMM Do YYYY"
      );

//conditionally render button based on whether the invoice has been paid or not.
    if (props.invoice.paid_at === null) {
        return(
            <Button variant="outlined" className={classes.paybutton}>
               Pay Invoice <FontAwesomeIcon icon={faMoneyBill} pull="right" size="2x"/>
           </Button>
            )
    } else {
        return (
            <div className={classes.paidcontainer}>
            <Typography className={classes.paidtext} variant="h6"> Invoice paid </Typography>
            <Typography className={classes.paidtext} variant="overline">{timeStamp}</Typography>
            <FontAwesomeIcon icon={faCheck} color='#73b816'/>
            </div>
        )
    }
}


export default PayInvoiceButton;
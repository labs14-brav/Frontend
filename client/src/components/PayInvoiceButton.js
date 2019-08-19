/**
 * Dependencies
 */

import React from 'react';
import moment from 'moment';
import axioswithAuth from '../helpers/axioswithAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faMoneyBill} from '@fortawesome/free-solid-svg-icons';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

/**
 * Constants
 */

const stripe = window.Stripe(process.env.REACT_APP_STRIPE_KEY);

/**
 * Define styles
 */

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
        padding: '30px',
        backgroundColor: '#ECF6FF',
    }
}))

/**
 * Define component
 */

function PayInvoiceButton(props) {
    const classes = useStyles();

    const clickHandler = () => {
        axioswithAuth().get(
          `${process.env.REACT_APP_API_URL}/invoices/${props.invoice.id}/session`
        ).then((result) => {
          if (result && result.data && result.data.session && result.data.session.id) {
            return stripe.redirectToCheckout({
              sessionId: result.data.session.id
            })
          }
        }).catch((err) => {
          console.error(err)
        })
      };

    const timeStamp = moment(props.invoice.paid_at).format(
        "MMMM Do YYYY"
      );

    //conditionally render button based on whether the invoice has been paid or not.
    if (props.invoice.paid_at === null) {
        return(
            <Button variant="outlined" className={classes.paybutton} onClick={clickHandler}>
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

/**
 * Export component
 */

export default PayInvoiceButton;
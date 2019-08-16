import React, { useState, useEffect }from 'react';

import PayInvoiceButton from './PayInvoiceButton';
import axioswithAuth from '../helpers/axioswithAuth';
import moment from 'moment';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import './UserInvoice.scss';

const useStyles = makeStyles(theme => ({
    paper: {
        width: '60%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(1, 2, 2),
        outline: 'none',
        marginBottom: theme.spacing(1),

        [theme.breakpoints.down('md')]: {
            width: '100%',
            height: '100%',
            },
        },
    content: { 
        width: '100%',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            height: '100%',
        },
    },
    label: {   
        fontSize: '16px',
    },
    info: { 
        fontSize: '16px',
        fontWeight: 500,
    },
    }))

function UserInvoice(props) {
    const classes = useStyles();
   
    const timeStamp = moment(props.invoice.created_at, "YYYY-MM-DD").format(
        "MM/DD/YYYY"
      );

    return(
        <Card className={classes.paper}>
            <CardContent className={classes.content}>
                <div id="content-div">
                    <div className="mediator-info">
                        <Typography variant="h6"> {props.mediator.name} </Typography>
                        <Typography variant="overline">
                            {props.mediator.email}
                        </Typography>
                        <Typography variant="overline">
                            {props.mediator.type}
                        </Typography>
                    </div>
                    <div className="table">
                        <div id="left">
                            <ul className="left-list">
                                <li className="left-list-item">
                                <Typography variant="overline" className={classes.label}>
                                    Date
                                </Typography >
                                </li>
                                <li className="left-list-item">
                                <Typography variant="overline" className={classes.label}>
                                    Hours
                                </Typography>
                                </li>
                                <li className="left-list-item">
                                <Typography variant="overline" className={classes.label}>
                                    Total
                                </Typography>
                                </li>
                            </ul>
                        </div>
                        <div id="right"> 
                            <ul className="right-list">
                                <li className="right-list-item">
                                    <Typography variant="overline" className={classes.info}> 
                                        {timeStamp}
                                    </Typography>
                                </li>
                                <li className="right-list-item">
                                    <Typography variant="overline" className={classes.info}> 
                                        {props.invoice.hours}
                                    </Typography>
                                </li>
                                <li className="right-list-item">
                                    <Typography variant="overline" className={classes.info}> 
                                        {props.invoice.amount * props.invoice.hours}
                                    </Typography>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <PayInvoiceButton invoice={props.invoice} />
                </div>
            </CardContent>
        </Card>
    )
}

export default UserInvoice;
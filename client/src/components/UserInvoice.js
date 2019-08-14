import React from 'react';

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
        width: '50%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 4),
        outline: 'none',
        },
    content: { 
        width: '100%',
    },
    label: {   
        fontSize: '16px',
    },
    info: { 
        fontSize: '16px',
    },
    paybutton: {
        marginLeft: '10px',
        padding: '10px',
        color: '#5C90C1',
    }
    }))

function UserInvoice(props) {
    console.log('Invoice Props', props);
    const classes = useStyles();
   

    return(
        <Card className={classes.paper}>
            <CardContent className={classes.content}>
                <div id="content-div">
                    <div className="mediator-info">
                        <Typography variant="h6"> Mediator Info Here </Typography>
                    </div>
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
                                    Now
                                </Typography>
                            </li>
                            <li className="right-list-item">
                                <Typography variant="overline" className={classes.info}> 
                                    Many
                                </Typography>
                            </li>
                            <li className="right-list-item">
                                <Typography variant="overline" className={classes.info}> 
                                    Too Much
                                </Typography>
                            </li>
                        </ul>
                    </div>
                    <Button variant="outlined" className={classes.paybutton}> 
                        Pay Invoice 
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default UserInvoice;
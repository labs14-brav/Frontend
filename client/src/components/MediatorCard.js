/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import SendRequestButton from './SendRequestButton';
/**
 * Define component
 */




const useStyles = makeStyles(theme => ({
  button: {
      margin: theme.spacing(1)
  },
  submitbutton: {
      justifyContent: 'center',
  },
  modal: {
      position: 'absolute',
      margin: '0 auto',
  },
  paper: {
      // width: '25%',
      // height: 300,
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 4),
      outline: 'none',
      // display: 'flex',
      // justifyContent: 'center',
    },
}))

const MediatorCard = (props) => {
  
  const classes = useStyles();
  return (
    <>
    <Grid item xs={12} sm={12} md={6} lg={6}>
          <Card className={classes.paper}>
            <CardContent >
                <h5 className='card-name'> {props.mediator.name} </h5>
                <p id="case-label">License:</p> 
                <p className='card-info'>{props.mediator.license}</p>
                <p id="case-label">Experience:</p>
                <p className='card-info'>{props.mediator.experience}</p>
                <p id="case-label">Specialization:</p>
                <p className='card-info'> {props.mediator.specialization}</p>
                <p id="case-label">Language:</p>
                <p className='card-info'>{props.mediator.language}</p>
                <p id="case-label">Bio:</p>
                <p className='card-bio'>{props.mediator.professional_bio}</p>
                <p id="case-label">Price: </p>
                <p className='card-info'>{props.mediator.price}/hr</p>
            </CardContent>
              <CardActions>
                <SendRequestButton mediator={props.mediator}/>
              </CardActions>
       
    </Card>
    </Grid>
  </>
  );
};

/**
 * Export component
 */

export default MediatorCard;

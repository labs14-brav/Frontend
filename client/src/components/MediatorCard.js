/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
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

  function handleRequest() {
    axios.post(`/mediators/${props.mediator.id}/cases`)
}


  return (
    <Card >
      <CardContent >
        <h5 className='card-name'> {props.mediator.name} </h5>
        <p className='card-label'>License:</p> 
        <p className='card-info'>{props.mediator.license}</p>
        <p className='card-label'>Experience:</p>
        <p className='card-info'>{props.mediator.experience}</p>
        <p className='card-label'>Specialization:</p>
        <p className='card-info'> {props.mediator.specialization}</p>
        <p className='card-label'>Language:</p>
        <p className='card-info'>{props.mediator.language}</p>
        <p className='card-bio'>{props.mediator.professional_bio}</p>
        </CardContent>
        <CardActions>
          <button onClick={handleRequest}>Select</button>
        </CardActions>
    </Card>
  //   </Grid>
  // </>
  );
};

/**
 * Export component
 */

export default MediatorCard;

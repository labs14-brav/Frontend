/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

/**
 * Define component
 */

 //name, license, experience, specialization, language, professional_bio
 const useStyles = makeStyles({
   card: {

   },
 })

const MediatorCard = (props) => {
  console.log("Mediator card props", props)
  const classes = useStyles();
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
        <p className="card-label">Price: </p>
        <p className='card-info'>{props.mediator.price}</p>
        </CardContent>
        <CardActions>
          <button>Select</button>
        </CardActions>
    </Card>
  );
};

/**
 * Export component
 */

export default MediatorCard;

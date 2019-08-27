/**
 * Dependencies
 */

import React from 'react';
import SendRequestButton from './SendRequestButton';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

/**
 * Define styles
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
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 4),
      outline: 'none',
    },
}))

/**
 * Define component
 */

const MediatorCard = (props) => {
  const classes = useStyles();

  return (
    <>
        <Grid
          item xs={11}
          sm={11}
          md={props.numMediators === 1 ? 12 : 6}
          lg={props.numMediators === 1 ? 12 : 6}>
        <Card className={classes.paper}>
          <CardContent>
              <h5 className='card-name'> {props.mediator.name} </h5>
              <p className="case-label">License:</p> 
              <p className='card-info'>{props.mediator.license}</p>
              <p className="case-label">Experience:</p>
              <p className='card-info'>{props.mediator.experience}</p>
              <p className="case-label">Specialization:</p>
              <p className='card-info'> {props.mediator.specialization}</p>
              <p className="case-label">Language:</p>
              <p className='card-info'>{props.mediator.language}</p>
              <p className="case-label">Bio:</p>
              <p className='card-bio'>{props.mediator.professional_bio}</p>
              <p className="case-label">Price: </p>
              <p className='card-info'>{props.mediator.price}/hr</p>
          </CardContent>

          <CardActions style={{display:"flex", justifyContent:'center'}}>
            <SendRequestButton mediator={props.mediator} currentcase={props.currentcase}/>
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

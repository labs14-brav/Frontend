/**
 * Dependencies
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import axioswithAuth from '../helpers/axioswithAuth';
import { Button, Container } from "@material-ui/core";

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
      border: '1px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 4),
      outline: 'none',
    },
}))

/**
 * Define component
 */

const AdminRequestCard = (props) => {
  const classes = useStyles();
  const handleSubmitAccept = (id) => {
    let yes = window.confirm('Are you sure?')

    if (yes) {
      axioswithAuth()
      .put( `/users/${id}/mediator-request-accepted`)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      });
    }
  };

  const handleSubmitDecline = (id) => {
    let yes = window.confirm('Are you sure?')

    if (yes) {
      axioswithAuth()
      .put(`/users/${id}/mediator-request-declined`)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      });
    }
  };

  return (
    <>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Card className={classes.paper}>
          <CardContent >
              <h4 className='card-name'>{props.requests.name}</h4>
              <h5 className='card-email'> {props.requests.email} </h5>
              <p className="case-label">License:</p>
              <p className='card-info'>{props.requests.license}</p>
              <p className="case-label">Experience:</p>
              <p className='card-info'>{props.requests.experience}</p>
              <p className="case-label">Specialization:</p>
              <p className='card-info'> {props.requests.specialization}</p>
              <p className="case-label">Language:</p>
              <p className='card-info'>{props.requests.language}</p>
              <p className="case-label">Price: </p>
              <p className='card-info'>{props.requests.price}/hr</p>
          </CardContent>

          <CardActions >
            <Button onClick={(e) => handleSubmitAccept(props.requests.id)}>Accept</Button>
            <Button onClick={(e) => handleSubmitDecline(props.requests.id)}>Decline</Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

/**
 * Export component
 */

export default AdminRequestCard;

/**
 * Dependencies
 */

import React, { useState, Component } from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router';

// maerial-ui imports

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";

//react component import
import { OutsideCourtForm, CourtForm } from '../components/index'


// Global Component Styles

    const useStyles = makeStyles(theme => ({
          button: {
            margin: theme.spacing(1),
            width: 100,
          },
    }));


const CaseForm = (props) =>{
const classes = useStyles();
  const courtFormHandler = e => {
    e.preventDefault();
    props.history.push('/cases/new/court');
  }

  const outsideCourtFormHandler = e => {
    e.preventDefault();
    props.history.push('/cases/new/outside');
  }

  return(
 
        <div style={{paddingTop:"15%"}}>
      <h3>Is your case a...</h3>
      <Button className={classes.button} onClick={courtFormHandler}>
        Court Referral
      </Button>
        <h3> or a </h3>
      <Button className={classes.button} onClick={outsideCourtFormHandler}>
        Non-Court Referral?
      </Button>
      </div>
   
  )
  
  };
  
  /**
   * Export view
   */
  
  export default CaseForm;
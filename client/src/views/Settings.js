/**
 * Dependencies
 */

import React from 'react';
import { DeactivateAccountButton, NavBar, SideNavBlock } from '../components/index';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/styles';
import { Button, makeStyles } from '@material-ui/core';
import axios from 'axios';
import { axioswithAuth } from '../helpers/index';

import {
  HeaderH1,
  HeaderH2,
  HeaderH3,
  BecomeMediatorLink,
  EditUserLink,
} from './styles/index';

/**
 * Define view
 */

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: "600px",
    height: "600px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    paddingTop: "80px",
    justifyContent: "center"
  },
  linkContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px"
  }
}))



function Settings() {
  const classes = useStyles();
  return (
  
      <div className={classes.container} container style={{paddingTop:"5%",overflowX:"hidden",overflowY:"hidden"}} >
        <HeaderH1>My Settings</HeaderH1>

          <Grid  >
            <Grid item xs={6}>
              <HeaderH3>Contact Info</HeaderH3>
              <Typography>Name: </Typography>
              <Typography>Email: </Typography>
              <Typography>Phone: </Typography>
              <Typography>Time Zone: </Typography>
              <Typography>Location: </Typography>
            </Grid>

            <div className={classes.linkContainer}>
              <Link style={{textDecoration:"none"}} to="/users/mediator-registration">
                <BecomeMediatorLink>  
                Become a Mediator
                </BecomeMediatorLink>
              </Link>
              
              <DeactivateAccountButton />
            </div>
          
          </Grid>
    </div>
  );
}

/**
 * Export view
 */

export default Settings;

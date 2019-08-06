/**
 * Dependencies
 */

import React from 'react';
import { DeactivateAccountButton, NavBar, SideNavBlock } from '../components/index';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {
  HeaderH1,
  HeaderH2,
  HeaderH3,
  BecomeMediatorLink,
  EditUserLink,
} from './styles/index'

/**
 * Define view
 */

function Settings() {
  return (
  
      <div container style={{paddingTop:"5%",overflowX:"hidden",overflowY:"hidden"}} >
        <HeaderH1>My Settings</HeaderH1>
          <Grid container spacing={9} justify="center" >
            <Grid item xs={6}>
              <HeaderH3>Contact Info</HeaderH3>
              <Typography>Name: </Typography>
              <Typography>Email: </Typography>
              <Typography>Phone: </Typography>
              <Typography>Time Zone: </Typography>
              <Typography>Location: </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={9} justify="center">
            <Grid item xs={6}>
              <BecomeMediatorLink to="/users/mediator-registration">
                Become a Mediator
              </BecomeMediatorLink>
            </Grid>

           
          </Grid>

          <Grid container spacing={9} justify="center">
            <Grid item xs={6}>
              <DeactivateAccountButton />
            </Grid>
          </Grid>
    </div>
  );
}

/**
 * Export view
 */

export default Settings;

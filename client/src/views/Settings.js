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
  
      <div container style={{paddingTop:"5%"}}>
        <HeaderH1>My Settings</HeaderH1>
          <Grid container spacing={9} justify="center">
            <Grid item xs={6} md={4}>
              <HeaderH3 justify="center">Contact Info</HeaderH3>
              <Typography>Name: </Typography>
              <Typography>Email: </Typography>
              <Typography>Phone: </Typography>
              <Typography>Time Zone: </Typography>
              <Typography>Location: </Typography>
            </Grid>

            <Grid item xs={6} md={4}>
              <HeaderH3>Billing</HeaderH3>
              <Typography>Card Number: </Typography>
              <Typography>Expiration Date: </Typography>
              <Typography>Credit Card Security: </Typography>
              <Typography>Payment Type: </Typography>
              <Typography>Country: </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={9} justify="center">
            <Grid item xs={12} md={4}>
              <BecomeMediatorLink to="/users/mediator-registration">
                Become a Brāv One
              </BecomeMediatorLink>
            </Grid>

            <Grid item xs={12} md={4}>
              <EditUserLink to="/users/settings">Edit</EditUserLink>
            </Grid>
          </Grid>

          <Grid container spacing={9} justify="center">
            <Grid item xs={12} md={4}></Grid>

            <Grid item xs={12} md={4}>
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

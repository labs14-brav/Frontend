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
  
      <div className="settings" style={{paddingTop:"5%", margin:"0 auto"}}>
        <HeaderH1>My Settings</HeaderH1>
          <Typography container spacing={9} justify="center">
            <Grid item xs={12} md={4}>
              <HeaderH3>Contact Info</HeaderH3>
              <Typography>Name: </Typography>
              <Typography>Email: </Typography>
              <Typography>Phone: </Typography>
              <Typography>Time Zone: </Typography>
              <Typography>Location: </Typography>
            </Grid>

            <Typography item xs={12} md={4}>
              <HeaderH3>Billing</HeaderH3>
              <Typography>Card Number: </Typography>
              <Typography>Expiration Date: </Typography>
              <Typography>Credit Card Security: </Typography>
              <Typography>Payment Type: </Typography>
              <Typography>Country: </Typography>
            </Typography>
          </Typography>

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

          <Grid container spacing={9}>
            <Grid item xs={12} md={6}></Grid>

            <Grid item xs={12} md={6}>
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

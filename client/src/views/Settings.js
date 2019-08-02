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
    <Grid container style={{ height: '100vh' }}>
    {/* <NavBar /> */}
      {/* <SideNavBlock /> */}
      <Grid item xs={8} sm={9} lg={10} className="bg-brav" style={{paddingTop: "50px"}}>

        <HeaderH1>My Settings</HeaderH1>

        <div style={{ padding: '36px' }}>
          <Grid container spacing={9}>
            <Grid item xs={12} md={6}>
              <HeaderH3>Contact Info</HeaderH3>
              <Typography>Name: </Typography>
              <Typography>Email: </Typography>
              <Typography>Phone: </Typography>
              <Typography>Time Zone: </Typography>
              <Typography>Location: </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <HeaderH3>Billing</HeaderH3>
              <Typography>Card Number: </Typography>
              <Typography>Expiration Date: </Typography>
              <Typography>Credit Card Security: </Typography>
              <Typography>Payment Type: </Typography>
              <Typography>Country: </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={9}>
            <Grid item xs={12} md={6}>
              <BecomeMediatorLink to="/users/mediator-registration">
                Register as Mediator
              </BecomeMediatorLink>
            </Grid>

            <Grid item xs={12} md={6}>
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

      </Grid>
    </Grid>
  );
}

/**
 * Export view
 */

export default Settings;

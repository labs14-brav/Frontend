/**
 * Dependencies
 */

import React from 'react';
import { DeactivateAccountButton, NavBar } from '../components/index';
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
      {/* <Grid item xs={4} sm={3} lg={2} className="bg-brav-secondary">
        <HeaderH2>Brāv</HeaderH2>
      </Grid> */}

      <Grid item xs={12} sm={12} lg={12} className="bg-brav">
        <NavBar />

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

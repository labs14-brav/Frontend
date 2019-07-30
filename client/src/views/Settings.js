/**
 * Dependencies
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { DeactivateAccountButton, SettingsNavBar } from '../components/index';
import { styled } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

/**
 * Define styles
 */

const HeaderH1 = styled('h1')({
  textAlign: 'center',
  padding: '50px 0px',
});

const HeaderH2 = styled('h2')({
  textAlign: 'center',
  padding: '10px 0px',
  color: 'white',
});

const HeaderH3 = styled('h3')({
  color: '#333',
  fontWeight: '800',
});

/**
 * Define view
 */

function Settings() {
  return (
    <Grid container style={{ height: '100vh' }}>
      <Grid item xs={4} sm={3} lg={2} className="bg-brav-secondary">
        <HeaderH2>Brāv</HeaderH2>
      </Grid>

      <Grid item xs={8} sm={9} lg={10} className="bg-brav">
        <SettingsNavBar />

        <HeaderH1>My Settings</HeaderH1>

        <Grid container>
          <Grid item xs={12} sm={6}>
            <HeaderH3>Contact Info</HeaderH3>

          </Grid>
          <Grid item xs={12} sm={6}>
            <HeaderH3>Billing</HeaderH3>
          </Grid>
        </Grid>

        <Link to="/users/mediator-registration">Register as Mediator</Link>
        <DeactivateAccountButton />
      </Grid>
    </Grid>
  );
}

/**
 * Export view
 */

export default Settings;

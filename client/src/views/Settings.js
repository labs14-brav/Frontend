/**
 * Dependencies
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { DeactivateAccountButton, SettingsNavBar } from '../components/index';
import { styled } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

/**
 * Define styles
 */

const HeaderH1 = styled('h1')({
  textAlign: 'center',
  padding: '40px 0px',
  margin: '0px',
});

const HeaderH2 = styled('h2')({
  textAlign: 'center',
  padding: '10px 0px',
  color: 'white',
});

const HeaderH3 = styled('h3')({
  color: '#333',
  fontWeight: '800',
  paddingBottom: '20px',
});

const BecomeMediatorLink = styled(Link)({
  color: '#FFF',
  backgroundColor: '#E55557',
  boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
  padding: '6px 16px',
  textDecoration:'none',
  lineHeight: '1.75',
  fontWeight: 500,
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: '#be4345',
  },
  '&:active': {
    boxShadow: '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)',
  }
})

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
              <Link to="/settings">Edit</Link>
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

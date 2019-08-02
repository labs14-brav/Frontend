/**
 * Dependencies
 */

import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';
import firebase from 'firebase';
import Grid from '@material-ui/core/Grid';
import {
  HeaderH1,
  HeaderH2,
  HeaderH3,
  BecomeMediatorLink,
  EditUserLink,
} from '../views/styles/index'

/**
 * Constants
 */

const bg_grey = grey[900];

/**
 * Define component
 */

function NavBar(props) {
  function logout() {
    localStorage.clear()
    firebase.auth().signout()
    window.location = '/'
  }

  return (
    <Grid container style={{position:"absolute", boxShadow:"5px 0px 8px #888888"}} className="navBarTop">
      <Grid item xs={4} sm={3} lg={2} className="bg-brav-secondary">
          <h1 className="braveHeader">Brāv</h1>
        </Grid>
        <Grid  item xs={8} sm={9} lg={10}>
      <nav position="static" color="default">
        <Toolbar className="bg-white">
          <Link to="/home" style={{ color: 'inherit', textDecoration: 'none', flexGrow: 1 }}>
            <Typography variant="h6">
              Home
            </Typography>
          </Link>
          <Link to="/users/settings" style={{textDecoration:"none"}}><Button>Settings</Button></Link>
          <Button onClick={logout}>Sign Out</Button>
          
        </Toolbar>
      </nav>
      </Grid>
    </Grid>
  );
};

/**
 * Export component
 */

export default NavBar;

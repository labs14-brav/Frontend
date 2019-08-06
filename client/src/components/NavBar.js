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
    // firebase.auth().signout()
    window.location = '/'
  }

  function checkType() {
    let type = localStorage.getItem("type");
    if (type === 'mediator') {
     return '/mediator-cases';
    } else {
      return '/cases';
    }
  }

  if(localStorage.getItem("type")==='admin'){
    return (
      <Grid container style={{position: 'absolute', boxShadow:"5px 0px 8px #888888"}} className="navBarTop">
        <Grid item xs={4} sm={3} lg={2} className="bg-brav-secondary">
          <h1 className="bravHeader">Brāv</h1>
        </Grid>
        <Grid item xs={8} sm={9} lg={10}>
          <nav position="static" color="default">
            <Toolbar className="bg-white">
              <span style={{ flexGrow: 1 }}></span>
              <Button onClick={logout}>Sign Out</Button>
            </Toolbar>
          </nav>
        </Grid>
      </Grid>
    )

  }else{

  return (
    <Grid container style={{position: 'absolute', boxShadow:"5px 0px 8px #888888", overflow:"hidden"}} className="navBarTop">
      <Grid item xs={4} sm={3} lg={2} className="bg-brav-secondary">
        <h1 className="bravHeader">Brāv</h1>
      </Grid>

      <Grid item xs={8} sm={9} lg={10}>
        <nav position="static" color="default">
          <Toolbar className="bg-white">
            <span style={{ flexGrow: 1 }}></span>
            <Link to={checkType()} style={{ color: 'inherit', textDecoration: 'none', fontWeight: 500, color: 'rgba(0, 0, 0, 0.87)' }}><Button>
              Cases
            </Button></Link>
            <Link to="/users/settings" style={{textDecoration:"none"}}><Button>Settings</Button></Link>
            <Button onClick={logout}>Sign Out</Button>

          </Toolbar>
        </nav>
      </Grid>
    </Grid>
  );
  }
};

/**
 * Export component
 */

export default NavBar;

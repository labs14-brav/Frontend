/**
 * Dependencies
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import SignOutIcon from '../icons/SignOutIcon';

/**
 *  Import styles
 */

import './styles/UserCaseCard.scss';

/**
 * Define component
 */

function NavBar(props) {
  function logout() {
    localStorage.clear()
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

  if (localStorage.getItem("type")==='admin') {
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
  } else {
    return (
      <Grid container style={{position: 'absolute', boxShadow:"5px 0px 8px #888888", overflow:"hidden"}} className="navBarTop">
        <Grid item xs={4} sm={3} lg={2} className="bg-brav-secondary">
          <NavLink to={checkType()} style={{display:"flex", backgroundColor:"#5C90C1", justifyContent:"center", alignItems:'center', height:"100%", textDecoration: 'none'}}>
          <img className="bravLogo" src="https://firebasestorage.googleapis.com/v0/b/brav-3077e.appspot.com/o/brav-lion-logo.png?alt=media&token=4a50279b-acdf-4f74-b2ce-2b8916721331" alt="brav logo" style={{maxWidth:"22.5%", backgroundColor:"#5C90C1", paddingRight:"10px"}}/>
          <h1 className="bravHeader">Brāv</h1>
          </NavLink>
        </Grid>

        <Grid item xs={8} sm={9} lg={10}>
          <nav position="static" color="default">
            <Toolbar className="bg-white">
              <span style={{ flexGrow: 1 }}></span>
              <NavLink activeClassName="activeNavButton" to={checkType()} style={{ color: 'inherit', textDecoration: 'none', fontWeight: 500, color: '#5C90C1' }}><Button>
                Cases
              </Button></NavLink>
              <NavLink activeClassName="activeNavButton" to="/users/settings" style={{textDecoration:"none",fontWeight: 500, color: '#5C90C1' }}><Button>Settings</Button></NavLink>

              <Box display={{ xs: 'block', sm: 'none' }}>
                <Button onClick={logout} style={{minWidth: 0}}><SignOutIcon /></Button>
              </Box>
              <Box display={{ xs: 'none', sm: 'block' }}>
                <Button onClick={logout}>Sign Out</Button>
              </Box>
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

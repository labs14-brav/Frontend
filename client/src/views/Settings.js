/**
 * Dependencies
 */

import React from 'react';
import { DeactivateAccountButton, NavBar, SideNavBlock } from '../components/index';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import axios from 'axios';
import { axioswithAuth } from '../helpers/index';

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

          <Grid container spacing={9} justify="center" style={{display:"flex",flexDirection:"column", alignItems:"center"}} >
            <Grid item xs={6}>
              <HeaderH3>Contact Info</HeaderH3>
              <Typography>Name: </Typography>
              <Typography>Email: </Typography>
              <Typography>Phone: </Typography>
              <Typography>Time Zone: </Typography>
              <Typography>Location: </Typography>
            </Grid>

            <Grid item xs={6}>
            <Link style={{textDecoration:"none"}} to="/users/mediator-registration">
                <BecomeMediatorLink>  
                Become a Mediator
              </BecomeMediatorLink>
              </Link>
              
            </Grid>

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

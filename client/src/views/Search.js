/**
 * Dependencies
 */

import React from 'react';
import { MediatorFilter } from '../components/index';
import { HeaderH1 } from './styles/index';
import Grid from '@material-ui/core/Grid';

/**
 * Import styles
 */

import './UserCaseShow.scss';

/**
 * Define view
 */

function Search(props) {
  return (    
    <Grid container spacing={9} justify="center" style={{paddingTop:"100px"}}>
      <Grid item xs={12}>
        <HeaderH1>Search for a Mediator</HeaderH1>
      </Grid>

      <Grid item xs={12} md={9}>
        <MediatorFilter currentcase={props.location.state.currentcase}/>
      </Grid>
    </Grid>
  )
};

/**
 * Export view
 */

export default Search;

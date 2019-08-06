/**
 * Dependencies
 */

import React from 'react';
import { MediatorFilter } from '../components/index';
import { HeaderH1 } from './styles/index';
import Grid from '@material-ui/core/Grid';

/**
 * Define view
 */

function Search(props) {
  return (
    <Grid container spacing={9} justify="center" style={{padding:"100px"}}>
      <Grid item xs={12}>
        <HeaderH1>Search for a Mediator</HeaderH1>
      </Grid>

      <Grid item xs={12}>
        <MediatorFilter currentcase={props.location.state.currentcase}/>
      </Grid>
    </Grid>
  )
};

/**
 * Export view
 */

export default Search;

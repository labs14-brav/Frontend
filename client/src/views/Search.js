/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MediatorFilter } from '../components/index';
import Grid from "@material-ui/core/Grid";


/**
 * Locals
 */


/**
 * Define view
 */

function Search(props) {
  console.log("Search incoming props", props);
  console.log(props.location.state.currentcase);

  return (


    <>
    <Grid container>
        <Grid item xs={8} sm={9} lg={10} className="bg-brav" style={{paddingTop: "50px", backgroundColor: "#ECF6FF"}} className="mediator-cases-show">
        <div className="App">
        <h3> Search for a Mediator</h3>
        <MediatorFilter currentcase={props.location.state.currentcase}/>
        </div>
        </Grid>
        </Grid>
    </>
   
  )
};

/**
 * Export view
 */

export default Search;

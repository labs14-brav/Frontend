/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MediatorList from '../components/MediatorList';
import Grid from "@material-ui/core/Grid";


/**
 * Locals
 */


/**
 * Define view
 */

function Search(props) {
  const [currentCase, setCase] = useState({});
//   console.log('Case ID --------------', props.match.params.id);
//   useEffect(() => {

//       async function getCase() {
//           const res = await axios.get(`${process.env.REACT_APP_API_URL}/cases/:id`)
//           console.log(res.data);
//       }
//   }, []);

  return (


    <>
    <Grid container>
        <Grid item xs={8} sm={9} lg={10} className="bg-brav" style={{paddingTop: "50px", backgroundColor: "#ECF6FF"}} className="mediator-cases-show">
        <div className="App">
        <h3> Search for a Mediator</h3>
        <MediatorList />
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

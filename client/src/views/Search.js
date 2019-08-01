/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MediatorList, MediatorFilter } from '../components/index';


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
    <div className="App">
        <h3> Search for a Mediator</h3>
        <MediatorFilter currentcase={props.location.state.currentcase}/>
        <MediatorList />
    </div>
  )
};

/**
 * Export view
 */

export default Search;

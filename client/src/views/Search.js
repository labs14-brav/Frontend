/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MediatorList from '../components/MediatorList';


/**
 * Locals
 */


/**
 * Define view
 */

function Search(props) {
  const [currentCase, setCase] = useState({});
  console.log('Case ID --------------', props.match.params.id);
  useEffect(() => {
    
      async function getCase() {
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/cases/:id`)
          console.log(res.data);
      }
  }, []);

  return (
    <div className="App">
        <h3> Search for a Mediator</h3>
        <MediatorList />
    </div>
  )
};

/**
 * Export view
 */

export default Search;

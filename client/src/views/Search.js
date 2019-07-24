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

function Search() {
  const [mediators, setUsers] = useState([]);
  const [currentCase, setCase] = useState({});

  useEffect(() => {
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

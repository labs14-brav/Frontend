/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Define component
 */

const MediatorList = (props) => {
    const [mediators, setMediators] = useState([]);

    useEffect(() => {
        async function fetchMediators() {
            //boolean check for env that will change axios request
            //https://bravproduction.herokuapp.com/mediators
            //https://brav-staging.herokuapp.com/mediators
            //http://localhost:8888/mediators
            const res = await axios.get("http://localhost:8888/mediators");
            console.log('Inside useEffect -----------------', res.data);
            setMediators(res.data);
        }

        fetchMediators()
        }, []);
        //re-check when filters change eventually, but for now just mimic ComponentDidMount. 

  return (
    <div className="list-container">
        {mediators.map(mediator => {
            return <MediatorCard mediator={mediator} key={mediator.uid} />
        })}
    </div>
  );
};

/**
 * Export component
 */

export default MediatorList;

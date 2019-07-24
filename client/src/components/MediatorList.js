/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MediatorCard from './MediatorCard';

/**
 * Define component
 */

const MediatorList = (props) => {
    const [mediators, setMediators] = useState([]);

    useEffect(() => {
        async function fetchMediators() {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/mediators`);
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

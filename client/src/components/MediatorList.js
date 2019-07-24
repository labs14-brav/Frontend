/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import { axioswithAuth } from '../helpers/index';
import MediatorCard from './MediatorCard';

/**
 * Define component
 */

const MediatorList = (props) => {
    const [mediators, setMediators] = useState([]);
    // console.log('LOCAL STORAGE ----------', localStorage.getItem('token'));
    // console.log('REACT ENV -----', process.env.REACT_APP_API_URL);
    useEffect(() => {
        
        console.log('Inside useEffect ----');
        async function fetchMediators() {
            const res = await axioswithAuth().get(`http://localhost:8888/mediators`);
            // console.log('Inside fetchMediators -----------------', res.data);
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

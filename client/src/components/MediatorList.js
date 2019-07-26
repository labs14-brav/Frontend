/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import { axioswithAuth } from '../helpers/index';
import MediatorCard from './MediatorCard';
import Grid from '@material-ui/core/Grid';

/**
 * Define component
 */

const MediatorList = (props) => {
    const [mediators, setMediators] = useState([]);

    useEffect(() => {
        async function fetchMediators() {
            const res = await axioswithAuth().get(`${process.env.REACT_APP_API_URL}/mediators`);
            setMediators(res.data);
            // setMediators(testMediators);
        }
        fetchMediators()
        }, []);
        //re-check when filters change eventually, but for now just mimic ComponentDidMount. 

  return (
      <>
        <Grid >
            {mediators.map(mediator => {
                return <MediatorCard mediator={mediator} key={mediator.uid} />
            })}
        </Grid>
    </>
  );
};

/**
 * Export component
 */

export default MediatorList;

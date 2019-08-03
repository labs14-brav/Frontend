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
   
    console.log(props);
    const [mediators, setMediators] = useState([]);

    useEffect(() => {
        console.log('Inside Mediator List UseEffect-- Mediators are updating.')
        async function fetchMediators() {
            const res = await axioswithAuth().get(`${process.env.REACT_APP_API_URL}/mediators`, {
                params: {
                    language: props.filter.language,
                    price: props.filter.price,
                    specialization: props.filter.specialization,
                    experience: props.filter.experience,
                }
            });
            setMediators(res.data);
            // setMediators(testMediators);
        }
        fetchMediators()
        }, [props.filter]);
        //re-check when filters change eventually, but for now just mimic ComponentDidMount. 

  return (
      
        <Grid container spacing={4} >
        
            {mediators.map(mediator => {
                return (
                
                        <MediatorCard mediator={mediator} key={mediator.uid} />
                 );
                    
            })}
       
        </Grid>
   
  );
};

/**
 * Export component
 */

export default MediatorList;

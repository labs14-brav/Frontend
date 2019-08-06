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
            const res = await axioswithAuth().get(`${process.env.REACT_APP_API_URL}/mediators`, {
                params: {
                    language: props.filter.language,
                    price: props.filter.price,
                    specialization: props.filter.specialization,
                    experience: props.filter.experience,
                }
            });
            setMediators(res.data);
        }
        fetchMediators()
    }, [props.filter]);

    return (
        <Grid container spacing={4} className="mt-4">
            {mediators.map(mediator => {
                return (
                    <MediatorCard mediator={mediator} currentcase={props.currentcase} key={mediator.uid} />
                 );
            })}
        </Grid>
    );
};

/**
 * Export component
 */

export default MediatorList;

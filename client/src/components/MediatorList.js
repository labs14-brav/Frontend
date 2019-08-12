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
    const [loading, setLoading]=useState(false);
    const [currentPage,setCurrentPage]=useState(1);
    const [mediatorsPerPage, setMediatorsPerPage]=useState(2);




    useEffect(() => {
        async function fetchMediators() {
            setLoading(true);
            const res = await axioswithAuth().get(`${process.env.REACT_APP_API_URL}/mediators`, {
                params: {
                    language: props.filter.language,
                    price: props.filter.price,
                    specialization: props.filter.specialization,
                    experience: props.filter.experience,
                }
            });
            setMediators(res.data);
            setLoading(false);
        }
        fetchMediators()
    }, [props.filter]);


    const indexOfLastMediator=currentPage*mediatorsPerPage;
    const indexOfFirstMediatior=indexOfLastMediator-mediatorsPerPage;
    const currentMediators=mediators.slice(indexOfFirstMediatior,indexOfLastMediator);

    return (
        <Grid container spacing={4} justify="space-evenly">
            {currentMediators.map(mediator => {
                return (
                    <MediatorCard mediator={currentMediators}  numMediators={mediator.length} currentcase={props.currentcase} key={mediator.uid} />
                 );
            })}
        </Grid>
    );
};

/**
 * Export component
 */

export default MediatorList;

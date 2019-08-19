/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import { axioswithAuth } from '../helpers/index';
import MediatorCard from './MediatorCard';
import Grid from '@material-ui/core/Grid';
import Pagination from './Pagination';

/**
 * Define component
 */

const MediatorList = (props) => {
    const [mediators, setMediators] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [mediatorsPerPage, setMediatorsPerPage] = useState(4);

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

    const indexOfLastMediator=currentPage*mediatorsPerPage;
    const indexOfFirstMediatior=indexOfLastMediator-mediatorsPerPage;
    const currentMediators=mediators.slice(indexOfFirstMediatior,indexOfLastMediator);

    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber)
    }

    return (
        <Grid container spacing={4} justify="space-evenly" >

            <Grid item xs={11} sm={11} md={12} lg={12}>
              <Pagination mediatorsPerPage={mediatorsPerPage} totalMediators={mediators.length} paginate={paginate}  currentPage={currentPage}/>
            </Grid>
       
            {currentMediators.map(mediator => {
                return (
                    <>
                    <MediatorCard mediator={mediator}  numMediators={mediator.length} currentcase={props.currentcase} key={mediator.uid} />
                    </>
                 );
            })}
        </Grid>
    );
};

/**
 * Export component
 */

export default MediatorList;

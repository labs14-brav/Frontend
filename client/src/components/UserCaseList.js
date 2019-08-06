import React, { useState, useEffect } from 'react';
import UserCaseCard from './UserCaseCard';
import Grid from '@material-ui/core/Grid';

import './UserCaseList.scss';

import axioswithAuth from '../helpers/axioswithAuth';


const UserCaseList = (props) => {
    const [cases, setCases] = useState([]);

    useEffect(() => {
        async function fetchCases() {
            const res = await axioswithAuth().get(`${process.env.REACT_APP_API_URL}/cases`)
            // endpoint needs to be updated to a specific user's cases.
            setCases(res.data);
        }

        fetchCases();
    }, []);

    return (
        <div className="list-container">
        <Grid container spacing={3} 
        direction="row"
        justify="space-evenly">
            {cases.map(ele => {
                return <UserCaseCard numCases={cases.length} case={ele} key={ele.id}/>
            })}
        </Grid>
        </div>
    )
}


export default UserCaseList;
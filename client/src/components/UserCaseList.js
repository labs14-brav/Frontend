/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import UserCaseCard from './UserCaseCard';
import axioswithAuth from '../helpers/axioswithAuth';

/**
 * Import styles
 */

import './styles/UserCaseList.scss';

/**
 * Define component
 */

const UserCaseList = (props) => {
    const [cases, setCases] = useState([]);

    async function fetchCases() {
      const res = await axioswithAuth().get(`${process.env.REACT_APP_API_URL}/cases`)
      setCases(res.data);
    };

    useEffect(() => {
      fetchCases();
    }, []);

    return (
        <div className="list-container">
            {cases.length < 1 ? <div>You have no open cases...</div> :
              <Grid container spacing={3} direction="row" justify="space-evenly">
                  {cases.map(c => {
                      return <UserCaseCard fetchCases={fetchCases} numCases={cases.length} case={c} key={c.id}/>
                  })}
              </Grid>
            }
        </div>
    )
}

/**
 * Export component
 */

export default UserCaseList;

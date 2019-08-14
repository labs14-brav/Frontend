/**
 * Dependencies
 */

import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import axioswithAuth from '../helpers/axioswithAuth';
import AdminRequestCard from './AdminRequestCard';

/**
 * Define view
 */

const AdminMediatorRequestList = () => {
  const [requests, setRequests]= useState([])

  useEffect(() => {
    async function fetchRequests() {
      const res = await axioswithAuth().get('/mediators/pending');
      setRequests(res.data);
    }

    fetchRequests()
  }, []);

  if (requests.length === 0) {
    return (
      <h3 style={{textAlign:"center"}}> There are no pending Mediator requests.</h3>
    )
  } else {
    return (
      <Grid container spacing={4} >
        {requests.map(requests => <AdminRequestCard requests={requests} key={requests.uid}/>)}
      </Grid>
    )
  }
}

/**
 * Export view
 */

 export default AdminMediatorRequestList

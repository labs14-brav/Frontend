/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import AdminMediatorRequestList from '../components/AdminMediatorRequestList';
import LinearProgress from '@material-ui/core/LinearProgress';

/**
 * Define view
 */

function AdminHome(props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) return <LinearProgress />

  return (
    <div container="true" style={{paddingTop: "10%", margin: "20px 40px"}}>
      <h1 style={{textAlign:"center"}} data-testid="heading-h1">Request List</h1>
      <AdminMediatorRequestList />
    </div>
  )
};

/**
 * Export view
 */

export default AdminHome;

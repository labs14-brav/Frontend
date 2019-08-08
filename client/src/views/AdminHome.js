/**
 * Dependencies
 */

import React from 'react';
import { AdminMediatorRequestList } from '../components';

/**
 * Define view
 */

function AdminHome(props){
  return (
    <div container style={{paddingTop: "10%", margin: "20px 40px"}}>
      <h1 style={{textAlign:"center"}}>Request List</h1>
      <AdminMediatorRequestList />
    </div>
  )
};

/**
 * Export view
 */

export default AdminHome;

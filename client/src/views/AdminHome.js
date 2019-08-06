import React from 'react';
import { AdminMediatorRequestList } from '../components';


function AdminHome(props) {
  return (
    <div container style={{paddingTop:"10%", margin:'20px 40px'}}>   
      <h1 style={{textAlign:"center"}}> RequestList </h1>
      <AdminMediatorRequestList/>
    </div>
  )
};

export default AdminHome;
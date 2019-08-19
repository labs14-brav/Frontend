/**
 * Dependencies
 */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from "@material-ui/core";

/** 
 * Define component
 */

export default function CaseDetails(props) {
  const [_case, setCase]= useState({})

  useEffect(() => {
      async function fetchCase() {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/cases/${props.match.params.id}`, {
          headers: {
            "Authorization": localStorage.getItem('token'),
          },});
        console.log(res,"response")
        setCase(res.data);
      }
      fetchCase()
  }, []);

  return (
    <div style={{maxWidth:"1100px",margin:"0 auto",padding:"100px", }}>
        <p>{_case.description}</p>
        <Button variant="contained" color="primary" >Accept</Button>
        <Button variant="contained" color="secondary" >Decline</Button>
    </div>
  )
}

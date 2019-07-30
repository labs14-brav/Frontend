import React, { useEffect,useState } from 'react'
import axios from 'axios';


 export default function CaseDetails(props) {

    const [requests,setRequests]= useState([])
  
    useEffect(() => {
        async function fetchRequests() {
  
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/`,{
            headers: {
              "Authorization": localStorage.getItem('token'),
            },});
          console.log(res,"response")
          setRequests(res.data);
        }
        fetchRequests()
      },[]);
  
    return (
      <div style={{maxWidth:"1100px",margin:"0 auto",padding:"100px",}}>
    
      </div>
    )
  }
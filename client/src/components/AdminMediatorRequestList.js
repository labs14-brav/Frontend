import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import axioswithAuth from '../helpers/axioswithAuth';
import AdminRequestCard from './AdminRequestCard';
import Grid from '@material-ui/core/Grid';

import {
    Button, 
    Card,
    makeStyles,
    Container,
   } from "@material-ui/core";
  
   const useStyles = makeStyles({
    card: {
      maxWidth: 345,
      borderColor: "black"
    }
  });



 const  AdminMediatorRequestList = (props)=>{

    const classes = useStyles();

    const [requests,setRequests]= useState([])
  
    useEffect(() => {


        async function fetchRequests() {
          
          const res = await axioswithAuth().get('/mediators/pending');
          console.log(res,"response")
          // res.data.specialization = JSON.parse(res.data.specialization);
          // res.data.language = JSON.parse(res.data.language);
          setRequests(res.data);
        }
        fetchRequests()
      },[]);


    return (
      
        
            <Grid container spacing={4} >
              
                {requests.map(requests => {
             

                    return (
                      
                      <AdminRequestCard requests={requests} key={requests.uid}/>
                      
                    );

                
                })}
            </Grid>
         
    )
  }
  export default AdminMediatorRequestList
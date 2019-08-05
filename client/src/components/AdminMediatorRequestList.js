import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import axioswithAuth from '../helpers/axioswithAuth';
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



 export default function AdminMediatorRequestList(props) {

    const classes = useStyles();
    const [requests,setRequests]= useState([])
  
    useEffect(() => {
        async function fetchRequests() {

          const res = await axioswithAuth().get('/mediators/pending');
          console.log(res,"response")
          setRequests(res.data);
        }
        fetchRequests()
      },[]);


        const handleSubmitAccept = (id) => {
          // const adminEmail=JSON.parse(localStorage.getItem("firebaseui::rememberedAccounts"))[0].email
          // const adminEmail="labs14brav-admin@gmail.com"

          axioswithAuth()
          .put( `/users/${id}/mediator-request-accepted`)
          .then((res) => {
            console.log(res)
          })
          .catch((err) => {
            console.log(err)
          });
      };

        const handleSubmitDecline = (id) => {

          axioswithAuth()
          .put(`/users/${id}/mediator-request-declined`, )
          .then((res) => {
            console.log(res)
          })
          .catch((err) => {
            console.log(err)
          });
      };



  


    return (
      
        <Container>
            <Grid> 
                {/* container 
                spacing={2} 
                justify="center" 
                style={{maxWidth:"1100px",margin:"0 auto",padding:"100px", 
                }}> */}
                <ul>
                {requests.map((requests, index) => {
                return <Card className={classes.card}>
                    <li style={{padding:"10px"}} key={index}>{requests.License}</li>
                    <li>{requests.specialization}</li>
                    <Button onClick={(e)=>handleSubmitAccept(requests.id)}>Accept</Button>
                    <Button onClick={(e)=>handleSubmitDecline(requests.id)}>Decline</Button>
                </Card>
                    
                })}</ul>
            </Grid>
         </Container>
    )
  }
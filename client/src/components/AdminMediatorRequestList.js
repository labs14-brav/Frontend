import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
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
  
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/mediators/pending`,{
            headers: {
              "Authorization": localStorage.getItem('token'),
            },});
          console.log(res,"response")
          setRequests(res.data);
        }
        fetchRequests()
      },[]);



        const handleSubmitAccept = (id) => {
          const adminEmail=JSON.parse(localStorage.getItem("firebaseui::rememberedAccounts"))[0].email
          

          axios.put(
              `${process.env.REACT_APP_API_URL}/users/${id}/mediator-request-accepted`,{email:adminEmail},
              { headers: { Authorization: localStorage.getItem("token") } }
          );
          
          
      };

        const handleSubmitDecline = (e,id) => {
          const adminEmail=JSON.parse(localStorage.getItem("firebaseui::rememberedAccounts"))[0].email
        axios.put(
            `${process.env.REACT_APP_API_URL}/users/${id}/mediator-request-declined`,{email:adminEmail},
            { headers: { Authorization: localStorage.getItem("token") } }
        );
      };



  


    return (
        <Container>
            <Grid 
                container 
                spacing={2} 
                justify="center" 
                style={{maxWidth:"1100px",margin:"0 auto",padding:"100px", 
                }}>
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
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
    const [requests,setRequests]= useState([
        {
            "general":"dvsgcfsx",
            "License":"12424ewcsc",
            "experience":"23",
            "specialization":"sevrs",
            "language":"Sdfsec"

        },
        {
            "general":"dvscfsx",
            "License":"124234ewcsc",
            "experience":"2",
            "specialization":"sers",
            "language":"Sdfsec"

        },
        {
            "general":"dvsgcfsx",
            "License":"124ewcsc",
            "experience":"3",
            "specialization":"sevs",
            "language":"Sdec"

        }
    ])
  
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
                    <Button>Accept</Button>
                    <Button>Decline</Button>
                </Card>
                    
                })}</ul>
            </Grid>
        </Container>
    )
  }
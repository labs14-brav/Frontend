import React,{ useState,useEffect } from 'react'
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


export default function MediatorCasesShow() {
  const classes = useStyles();

  const [cases,setCases]= useState([])
  useEffect(() => {
      async function fetchCases() {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/cases`,{
          headers: {
            "Authorization": localStorage.getItem('token'),
          },});
        setCases(res.data);
      }
      fetchCases()
    },[]);

  return (
    <Container>
      <Grid 
        container 
        spacing={2} 
        justify="center" 
        style={{maxWidth:"1100px",margin:"0 auto",padding:"100px", 
        }}>
          <ul 
          >{cases.map((cases, index) => {
          return <Card className={classes.card}>
              <li style={{padding:"10px"}} key={index}>{cases.dispute_category}  </li>
              <li>{cases.user_email}</li>
              <Button><Link to={`/cases/${cases.id}`}>view details</Link></Button>
          </Card>
              
          })}</ul>
      </Grid>
    </Container>
  )
}

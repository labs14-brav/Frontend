/**
 * Dependencies
 */

import React,{useEffect} from 'react';
import { firebase } from '../helpers/index';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

/**
 * Define styles
 */

const useStyles = makeStyles(() => ({
  card: {
    paddingTop: "50px",
  }
}))

/**
 * Define view
 */

 function Login(props) {
  const classes = useStyles();

  useEffect(()=>{
    firebase();
  },[]);

  return (
    <div className="login">
      <Card className={classes.card} style={{  backgroundColor:"rgb(212, 212, 211)",height:"100vh"}}>
        <div id='firebaseui-auth-container'></div>
        <div id='loader'></div>
      </Card>
    </div>
  )
};

/**
 * Export view
 */

export default Login;

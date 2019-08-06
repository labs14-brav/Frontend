/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { UserCaseList } from '../components/index';
import Button from '@material-ui/core/Button';

import './UserCaseShow.scss';

/**
 * Define view
 */

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1)
    },
    caseButton: {
      margin: theme.spacing(2),
      width: '30%',
      height: 50,
      boxShadow: "5px 5px 5px #bec3c8",
      color: 'white',
      backgroundColor: '#5C90C1',
      "&:hover": {
        backgroundColor: "#517EA8"
      },
      "&:active": {
        backgroundColor: "#476e91"
      },
      [theme.breakpoints.down('sm')]: {
        width: '50%',
      }
    },
}))

const UserCaseShow = props => {
  const classes = useStyles();

  const buttonHandler = e => {
    e.preventDefault();
    props.history.push('/cases/new/');
  }

  return (
    <div style={{paddingTop:"12.5%"}} className="cases-container">
       <Button className={classes.caseButton} variant="outlined" onClick={buttonHandler}>Create a Case</Button>
        <UserCaseList />
    </div>
  )
};

/**
 * Export view
 */

export default UserCaseShow;

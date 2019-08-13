/**
 * Dependencies
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { UserCaseList } from '../components/index';
import Button from '@material-ui/core/Button';

/**
 * Import styles
 */

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
      width: '200px',
      height: 50,
      boxShadow: "5px 5px 5px #bec3c8",
      color: 'white',
      backgroundColor: '#5C90C1',
      marginBottom: '40px',
      "&:hover": {
        backgroundColor: "#517EA8"
      },
      "&:active": {
        backgroundColor: "#476e91"
      }
    },
}))

const UserCaseShow = props => {
  const classes = useStyles();

  const buttonHandler = e => {
    e.preventDefault();
    props.history.push('/cases/new');
  }

  return (
    <div style={{paddingTop:"100px"}} className="cases-container">
      <Button className={classes.caseButton} variant="outlined" onClick={buttonHandler}>Create a Case</Button>
      <UserCaseList />
    </div>
  )
};

/**
 * Export view
 */

export default UserCaseShow;

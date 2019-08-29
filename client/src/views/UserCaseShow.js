/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import UserCaseList from '../components/UserCaseList';

/**
 * Import styles
 */

import './styles/UserCaseShow.scss';

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) return <LinearProgress />

  const buttonHandler = e => {
    e.preventDefault();
    props.history.push('/cases/new');
  }

  return (
    <div style={{paddingTop:"100px",overflowX:"hidden",overflowY:"hidden",paddingBottom:"10px"}} className="cases-container">
      <Button className={classes.caseButton} variant="outlined" onClick={buttonHandler}><FontAwesomeIcon icon={faPlusSquare} size="2x" pull="left"/>  Create a Case</Button>
      <UserCaseList />
    </div>
  )
};

/**
 * Export view
 */

export default UserCaseShow;

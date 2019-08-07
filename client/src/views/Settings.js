/**
 * Dependencies
 */

import React from 'react';
import { DeactivateAccountButton } from '../components/index';
import { Link } from 'react-router-dom';
import { makeStyles, Card } from '@material-ui/core';
import { BecomeMediatorLink } from './styles/index';

/**
 * Define view
 */

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: "600px",
    height: "600px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    paddingTop: "80px",
    justifyContent: "center"
  },
  linkContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
  }
}))

/**
 * Define view
 */

function Settings() {
  const classes = useStyles();

  return (
      <div className={classes.container} container style={{paddingTop:"5%",overflowX:"hidden",overflowY:"hidden"}} >
        <div className={classes.linkContainer}>
            
            <Link style={{textDecoration:"none"}} to="/users/mediator-registration">
              <BecomeMediatorLink>  
              Become a Mediator
              </BecomeMediatorLink>
            </Link>
          <DeactivateAccountButton />
        </div>
    </div>
  );
}

/**
 * Export view
 */

export default Settings;

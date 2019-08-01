/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { UserCaseList } from '../components/index';
import Button from '@material-ui/core/Button';

/**
 * Locals
 */


/**
 * Define view
 */

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1)
    }
}))

const UserCaseShow = props => {
        const classes = useStyles();
  return (
    <>
        <Button variant="outlined" color="primary" className={classes.button}>
            <Link style={{textDecoration:'none', color:'inherit'}}to="/cases/1/mediator-search"> Find a Mediator </Link>
        </Button>
        <UserCaseList />
    </>
  )
};

/**
 * Export view
 */

export default UserCaseShow;

/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { MediatorCasesShow } from '../components';
import { makeStyles } from '@material-ui/core/styles';
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

//  Switch 1 in the link to :id when we have cases.
const CaseShow = props => {
        const classes = useStyles();
  return (
    <>
        <MediatorCasesShow/>
        <Button variant="outlined" color="primary" className={classes.button}>
            <Link style={{textDecoration:'none', color:'inherit'}}to="/cases/1/mediator-search"> Find a Mediator </Link>
        </Button>
    </>
  )
};

/**
 * Export view
 */

export default CaseShow;

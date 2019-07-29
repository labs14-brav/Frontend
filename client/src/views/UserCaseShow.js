/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
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
        <UserCaseList />
    </>
  )
};

/**
 * Export view
 */

export default UserCaseShow;

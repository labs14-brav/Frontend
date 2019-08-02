/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { UserCaseList } from '../components/index';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import {  Card, Container } from "@material-ui/core";

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
    <Grid container>
        <Grid item xs={8} sm={9} lg={10} className="bg-brav" style={{paddingTop: "50px", backgroundColor: "#ECF6FF"}} className="mediator-cases-show">
        <UserCaseList />
        </Grid>
        </Grid>
    </>
  )
};

/**
 * Export view
 */

export default UserCaseShow;

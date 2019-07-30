/**
 * Dependencies
 */

import React, { useState, Component } from 'react';
import axios from 'axios';

// maerial-ui imports

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';

/**
 * Define component
 */


let baseurl
if (process.env.NODE_ENV === 'production') {
   baseurl = "https://bravproduction.herokuapp.com/users?offset="
} else {
   baseurl = "https://brav-staging.herokuapp.com/users?offset="
}

// Global Component Styles

    const useStyles = makeStyles(theme => ({
          container: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
          },
          textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            // width: 200,
          },
          dense: {
            marginTop: 19,
          },
          menu: {
            width: 200,
          },
          button: {
            margin: theme.spacing(1),
            width: 50,
          },
    
    }));




const CaseForm = (props) =>{
  
  };
  
  /**
   * Export view
   */
  
  export default CaseForm;
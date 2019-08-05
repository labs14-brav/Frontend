/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MediatorFilter } from '../components/index';
import Grid from '@material-ui/core/Grid';
import { HeaderH1 } from './styles/index';

/**
 * Define view
 */

function Search(props) {
  return (
    <div style={{  paddingTop:"100px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        padding:"40px",
        }}>
        <HeaderH1> Search for a Mediator</HeaderH1>
        <MediatorFilter currentcase={props.location.state.currentcase}/>
    </div>
  )
};

/**
 * Export view
 */

export default Search;

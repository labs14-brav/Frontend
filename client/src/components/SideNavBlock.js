/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import { axioswithAuth } from '../helpers/index';
import MediatorCard from './MediatorCard';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import {
    HeaderH1,
    HeaderH2,
    HeaderH3,
    BecomeMediatorLink,
    EditUserLink,
  } from '../views/styles/index';

/**
 * Define component
 */

const SideNavBlock = (props) => {
  return (
        <Grid item xs={4} sm={3} lg={2} className="bg-brav-secondary" >
            { true ?
                <div className="lowerNavBlock" >
                <Link to="/mediator-cases">
                View Cases - Mediator
                </Link>
            </div>
            :
            <div className="lowerNavBlock">
                <Link to="/cases/new">
                    Create Case
                </Link>
                <Link to="/cases">
                    View Cases 
                </Link>
            </div>
        }
        </Grid>
  );
};

/**
 * Export component
 */

export default SideNavBlock;
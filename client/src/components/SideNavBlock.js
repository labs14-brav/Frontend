/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";


/**
 * Define component
 */

const SideNavBlock = (props) => {

    const userType = localStorage.getItem("type");
    console.log(userType)

    useEffect();

  return (
        <Grid item xs={4} sm={3} lg={2} className="bg-brav-secondary" >
            <div className="lowerNavBlock">
                <Link to="/mediator-cases">
                View Cases - Mediator
                </Link>
                <Link to="/cases/new">
                    Create Case
                </Link>
                <Link to="/cases">
                    View Cases 
                </Link>
            </div>
        </Grid>
  );
};

/**
 * Export component
 */

export default SideNavBlock;
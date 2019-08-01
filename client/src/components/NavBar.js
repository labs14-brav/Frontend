/**
 * Dependencies
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

/**
 * Define component
 */

const NavBar = props => {
    return (
        <div className="navbar">
            <Link to="/users/settings">
                <Button variant="contained" color="primary">
                    Settings
                </Button>
                <Button variant="contained" color="primary">
                    Sign Out
                </Button>
            </Link>
        </div>
    );
};

/**
 * Export component
 */

export default NavBar;

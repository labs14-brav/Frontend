/**
 * Dependencies
 */

import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';

/**
 * Constants
 */

const bg_grey = grey[900];

/**
 * Define component
 */

function SettingsNavBar(props) {
  return (
    <AppBar position="static" color="default">
      <Toolbar className="bg-white">
        <Link to="/home" style={{ color: 'inherit', textDecoration: 'none', flexGrow: 1 }}>
          <Typography variant="h6">
            Home
          </Typography>
        </Link>

        <Button onClick={props.logout}>Sign Out</Button>
      </Toolbar>
    </AppBar>
  );
};

/**
 * Export component
 */

export default SettingsNavBar;

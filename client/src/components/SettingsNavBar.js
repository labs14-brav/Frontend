/**
 * Dependencies
 */

import React from 'react';
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
    <AppBar position="static">
      <Toolbar className="bg-white">
        <Typography variant="h6" color={bg_grey}>Home</Typography>

        <Button onClick={props.logout}>Sign Out</Button>
      </Toolbar>
    </AppBar>
  );
};

/**
 * Export component
 */

export default SettingsNavBar;

/**
 * Dependencies
 */

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

/**
 * Define component
 */

function SettingsNavBar(props) {
  return (
    <AppBar position="static">
      <div className="row bg-white">
        <div className="col-6">
          <h4>Home</h4>
        </div>

        <div className="col-6 d-flex justify-content-end py-3">
          <Button onClick={props.logout}>Sign Out</Button>
        </div>
      </div>
    </AppBar>
  );
};

/**
 * Export component
 */

export default SettingsNavBar;

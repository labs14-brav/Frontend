/**
 * Dependencies
 */

import React from "react";
import { Link } from 'react-router-dom';

/**
 * Define view
 */

function Settings() {
  return (
    <div>
      <h1>User Settings</h1>
      <Link to="/users/mediator-registration" >Register as Mediator</Link>
    </div>
  );
}

/**
 * Export view
 */

export default Settings

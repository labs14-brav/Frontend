/**
 * Dependencies
 */

import React, { useEffect,useState } from 'react'
import { Button } from '@material-ui/core';
import axios from 'axios';

/**
 * Define component
 */

function DeactivateAccountButton(props) {
  function handleDeactivation() {
    let yes = window.confirm('Are you sure?')

    if (yes) {
      // TODO send axios request
    }
  }

  return (
    <Button variant="contained" color="secondary" onClick={handleDeactivation}>Deactivate</Button>
  )
}

/**
 * Export component
 */

export default DeactivateAccountButton;

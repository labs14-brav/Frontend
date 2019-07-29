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
  return (
    <Button variant="contained" color="secondary">Deactivate</Button>
  )
}

/**
 * Export component
 */

export default DeactivateAccountButton;

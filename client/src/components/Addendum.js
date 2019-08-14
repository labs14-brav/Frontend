/**
 * Dependencies
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

/**
 * Import styles
 */

import './Addendum.scss';

/**
 * Define component
 */

function Addendum(props) {
  return (
    <li className="addendum-text">
      <Typography variant="body1" >{props.text}</Typography>
      <Typography variant="caption"> {props.timestamp}</Typography>
    </li>
  )
}

/**
 * Export component
 */

export default Addendum;

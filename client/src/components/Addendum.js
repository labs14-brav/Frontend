/**
 * Dependencies
 */

import React from 'react';
import moment from "moment";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

/**
 * Import styles
 */

import './styles/Addendum.scss';

/**
 * Define styles
 */

const useStyles = makeStyles(theme => ({
  timestamp: {
    marginLeft: "auto",
    marginRight: "0"
  }
}));

/**
 * Define component
 */

function Addendum(props) {
  const classes = useStyles();

  const timeStamp = moment(props.timestamp, "YYYY-MM-DD HH:mm:ss").format(
    "MMMM Do YYYY, h:mma"
  );
  return (
    <li className="addendum-text">
      <Typography variant="body1">{props.text}</Typography>
      <Typography variant="caption" className={classes.timestamp}>
        {" "}
        {timeStamp}
      </Typography>
    </li>
  );
}

/**
 *  Export component
 */

export default Addendum;

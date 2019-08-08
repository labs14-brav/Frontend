import React from 'react';
import './Addendum.scss';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

function Addendum(props) {
    return (
        <li className="addendum-text">
            <Typography variant="body1" >{props.text}</Typography>
            <Typography variant="caption"> {props.timestamp}</Typography>
        </li>
    )
}

export default Addendum;
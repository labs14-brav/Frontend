import React from "react";
import moment from "moment";
import "./Addendum.scss";
import Typography from "@material-ui/core/Typography";

function Addendum(props) {
    const timeStamp = moment(props.timestamp, "YYYY-MM-DD HH:mm:ss").format(
        "MMMM Do YYYY, h:mma"
    );
    return (
        <li className="addendum-text">
            <Typography variant="body1">{props.text}</Typography>
            <Typography variant="caption"> {timeStamp}</Typography>
        </li>
    );
}

export default Addendum;

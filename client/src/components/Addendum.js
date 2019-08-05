import React from 'react';
import './Addendum.scss';


function Addendum(props) {
    return (
        <li className="addendum-text">{props.text}</li>
    )
}

export default Addendum;
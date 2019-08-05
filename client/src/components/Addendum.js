import React from 'react';


function Addendum(props) {
    console.log('Inside Addendum');
    return (
        <p>{props.text}</p>
    )
}

export default Addendum;
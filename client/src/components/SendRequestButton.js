import React, { Component } from 'react';
import axios from 'axios';

 function SendRequestButton(props) {
    function handleRequest() {
        axios.post(`/mediators/${props.mediator.id}/cases`)
    }

     return (
        <button onClick={handleRequest}>
            Send Request
        </button>
    )
}

 export default SendRequestButton;
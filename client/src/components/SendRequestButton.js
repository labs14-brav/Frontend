import React, { Component } from 'react';
import axios from 'axios';

function SendRequestButton(props) {
    function handleRequest() {
        axios.post(`/mediators/${props.mediator.id}/cases`)
    }

    return (
        <SendRequestButton onClick={handleRequest}>
            Send Request
        </SendRequestButton>
    )
}

export default SendRequestButton;
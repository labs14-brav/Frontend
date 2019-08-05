import React, { Component } from 'react';
import { axioswithAuth } from '../helpers/index';

function SendRequestButton(props) {
    console.log('request props', props)
    function handleRequest() {    
        axioswithAuth().post(`/mediators/${props.mediator.id}/cases`, props.currentcase.id)
            .then(res => {
                console.log(res);
            })
            .error(err => {
                console.error(err);
            })
    }

    return (
        <button onClick={handleRequest}>
            Send Request
        </button>
    )
}

export default SendRequestButton;
import React, { Component } from 'react';
import { axioswithAuth } from '../helpers/index';

function SendRequestButton(props) {
    console.log('request props', props)
    const handleRequest = () => {   
            let case_id = props.currentcase.id;
            axioswithAuth().post(`/mediators/${props.mediator.id}/cases`, {case_id})
            .then(res => {
                console.log(res);
            })
            .catch(err => {
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
import React, { Component } from 'react';
import axios from 'axios';

class SendCodeRequest extends Component {
    constructor(props){
        super(props);
        this.state = {
            mediators: []
        }
    }

    async sendRequest() {
        await axios.post(`/mediators/${mediator_id}/cases`);
    }

    render() {
        return (
            <div onClick={this.sendRequest}>
                Send Request
            </div>
        )
    }
}

export default SendCodeRequest;
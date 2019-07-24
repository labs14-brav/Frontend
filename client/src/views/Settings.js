import React from "react";
import { Link } from 'react-router-dom';

export default function Settings() {
    return (
        <div>
            <h1>We are in User Settings</h1>
            <Link to="/users/mediator-registration" >Register as Mediator</Link>
        </div>
    );
}

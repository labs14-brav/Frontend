/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import axioswithAuth from '../helpers/axioswithAuth';
import Addendum from './Addendum';

/**
 * Import styles
 */

import './styles/Addendum.scss';

/**
 * Define component
 */

function AddendumsList(props) {

    useEffect(() => {
        if (props.addendums) {
            props.fetchAddendums();
        }
    }, []);

    return (
        props.addendums === undefined ? (<><h5 id="addendums-blank"> This case has no additional details to view. </h5></>)
            :
            (<><ul id="addendums-list"> {props.addendums.map(adden => { return <Addendum key={adden.id} text={adden.description} timestamp={adden.created_at} /> })}</ul></>)
    )
}

/**
 * Export component
 */

export default AddendumsList;

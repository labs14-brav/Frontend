import React, { useState, useEffect } from 'react';
import { axioswithAuth } from '../helpers/index';

import Addendum from './Addendum';
import './Addendum.scss';

function AddendumsList(props) {
    const [addendums, setAddendums] = useState([]);

    useEffect(() => {
        axioswithAuth().get(`${process.env.REACT_APP_API_URL}/cases/${props.case.id}/addendums`)
        .then(res => {
            setAddendums(res.data);
        }) 
        .catch (err => {
            console.error(err);
        })
    }, [])

        if (addendums.length === 0) {
            return(
                <>
                <h3 id="addendums-blank"> This case has no additional details to view. </h3>
                </>
            )
        } else {
            return ( 
                <>
                <ul id="addendums-list">
                {addendums.map(adden => {
                    return <li><Addendum text={adden.description} timestamp={adden.created_at}/></li>
                })}
             </ul>
             </>
             )
        }
}

export default AddendumsList;
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
    }, [addendums])

        if (addendums.length === 0) {
            return(
                <>
                <h5 id="addendums-blank"> This case has no additional details to view. </h5>
                </>
            )
        } else {
            return ( 
                <>
                <ul id="addendums-list">
                {addendums.map(adden => {
                    return <Addendum key={adden.id} text={adden.description} timestamp={adden.created_at}/>
                })}
             </ul>
             </>
             )
        }
}

export default AddendumsList;
import React, { useState, useEffect } from 'react';
import { axioswithAuth } from '../helpers/index';

import Addendum from './Addendum';


function AddendumsList(props) {
    const [addendums, setAddendums] = useState([]);
    console.log('Inside AddendumsList');
    useEffect(() => {
        axioswithAuth().get(`${process.env.REACT_APP_API_URL}/${props.case.id}/addendums`)
        .then(res => {
            setAddendums(res.data);
        }) 
        .catch (err => {
            console.error(err);
        })
    }, [])

    return (
        <>
        <ul>
            {addendums.map(adden => {
                return <li><Addendum text={addendums}/></li>
            })}
        </ul>
        </>
    )
}

export default AddendumsList;
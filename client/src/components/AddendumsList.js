/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import axioswithAuth from '../helpers/axioswithAuth';
import Addendum from './Addendum';

/**
 * Import styles
 */

import './Addendum.scss';

/**
 * Define component
 */

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
    return <h3 id="addendums-blank">This case has no additional details to view.</h3>
  } else {
    return (
      <ul id="addendums-list">
        {addendums.map(addendum => {
          return <li><Addendum text={addendum.description} timestamp={addendum.created_at}/></li>
        })}
      </ul>
    )
  }
}

/**
 * Export component
 */

export default AddendumsList;

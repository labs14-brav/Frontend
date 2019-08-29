/**
 * Dependencies
 */

import React, { useState } from 'react';
import { mixpanel } from "../helpers/index";
import { documentsRef } from '../helpers/firebase';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

/**
 * Define component
 */

function CaseDocument(props) {
    const [link, setLink]= useState('');
    const fileRef = documentsRef.child(`${props.case.id}/${props.document.file_name}`);

    function handleClick(e) {
        e.preventDefault();

        fileRef.getMetadata().then((metadata) => {
          fileRef.getDownloadURL().then(url => {
            let img = document.getElementById('document-image');

            if (process.env.NODE_ENV === 'production') {
              mixpanel.track('View document', { distinct_id: localStorage.getItem('id') })
            }

            if (metadata.contentType === 'application/pdf') {
              img.src = '';
              // TODO handle PDFs
            } else {
              img.src = url;
            }
          })
          .catch(err => {
            console.error(err);
          })
        }).catch((err) => {
          console.error(err);
        });
    }

    return(
        <>
            <li>
                <Button id="view-button" onClick={handleClick} variant="outlined" className="my-1">View</Button> {props.document.file_name}
            </li>
        </>
    )
}

/**
 * Export component
 */

export default CaseDocument;

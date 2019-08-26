/**
 * Dependencies
 */

import React, { useEffect, useState } from 'react';
import { documentsRef } from '../helpers/firebase';
import axioswithAuth from '../helpers/axioswithAuth';

import Typography from '@material-ui/core/Typography';

/**
 * Define component
 */

function CaseDocumentsList(props) {
    const [documents, setDocuments]= useState([]);
    const [file, setFile]= useState({});

    useEffect(() => {
        fetchDocuments();
    }, []);

    async function fetchDocuments() {
        let doclist = await axioswithAuth().get(`cases/${props.case.id}/documents`)
        console.log('full document list', doclist.data);
        setDocuments(doclist.data);
        return doclist;
    }

    function handleInputChanges(e) {
        e.preventDefault();
        const file = e.target.files[0]
        console.log('file', file);
        if (!file) {
            return;
        }
        if (file && file.size > 1e8) {
            alert("File is too large. Maximum limit is 100MB.")
            e.target.value = ''
        } else {
            setFile(file);
        }
    } 
    function handleSubmitUploader(e) {
        e.preventDefault()
        console.log('Inside Submit');
        // Create file ref (Example: /documents/:case_id/:file_name)
        const fileRef = documentsRef.child(`${props.case.id}/${file.name}`)

        // Upload file
        fileRef.put(file).then((snapshot) => {
            console.log('Upload success!', snapshot.constructor, snapshot);
            axioswithAuth().post(`/cases/${props.case.id}/documents`, { file_name: file.name })
                .then(res => {
                    console.log(res);
                })
                .catch(error => {
                    console.error(error);
                })
        }).catch(err => {
            console.error(err)
        });
    }

    if (documents.length > 0) {
        return(
            <>
            <input required id="uploader" type="file" accept="image/*,.pdf,.doc" onChange={handleSubmitUploader}></input>
            <ul>
                {documents.map(doc => {
                    console.log('inside map', doc);
                 return <li> {doc.file_name} </li>
                })}
            </ul>
        </>
        )
    } else {
    return(
        <>
            <Typography>There are no documents currently uploaded. Upload relevant case documents by clicking the button below.</Typography>
            <form onSubmit={handleSubmitUploader}>
            <input required id="uploader" type="file" accept="image/*,.pdf,.doc" onChange={handleInputChanges}></input>
            <button onClick={() => handleSubmitUploader}> Upload </button>
                </form>
        </>
    )}
}

/**
 *  Export component
 */

export default CaseDocumentsList;
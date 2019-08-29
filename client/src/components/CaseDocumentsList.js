/**
 * Dependencies
 */

import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { documentsRef } from '../helpers/firebase';
import axioswithAuth from '../helpers/axioswithAuth';
import mixpanel from '../helpers/mixpanel';
import CaseDocument from './CaseDocument';

/**
 * Define component
 */

function CaseDocumentsList(props) {
    const [documents, setDocuments] = useState([]);
    const [file, setFile] = useState({});

    useEffect(() => {
        fetchDocuments();
    }, [file]);

    async function fetchDocuments() {
        let doclist = await axioswithAuth().get(`cases/${props.case.id}/documents`)
        setDocuments(doclist.data);
        return doclist;
    }

    function handleInputChanges(e) {
        e.preventDefault();
        const file = e.target.files[0]
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
        // Create file ref (Example: /documents/:case_id/:file_name)
        const fileRef = documentsRef.child(`${props.case.id}/${file.name}`)

        // Upload file
        fileRef.put(file).then((snapshot) => {
            console.log('Upload success!', snapshot.constructor, snapshot);
            axioswithAuth().post(`/cases/${props.case.id}/documents`, { file_name: file.name })
                .then(res => {
                    fetchDocuments();
                    if (process.env.NODE_ENV === 'production') {
                        mixpanel.track('Upload document', { distinct_id: localStorage.getItem('id') })
                    }
                })
                .catch(error => {
                    console.error(error);
                })
        }).catch(err => {
            console.error(err)
        });
    }

    if (documents.length > 0) {
        return (
            <>
                <form onSubmit={handleSubmitUploader}>
                    <input required id="uploader" type="file" accept="image/*,.pdf,.doc" onChange={handleInputChanges}></input>
                    <button type="submit">Upload</button>
                </form>

                <ul className="mt-2">
                    {documents.map((doc, index) => {
                        return <CaseDocument key={index} document={doc} case={props.case} />
                    })}
                </ul>

                <hr />

                <div id="div-pdf"></div>
                <img id="document-image" width="100%"></img>
            </>
        )
    } else {
        return (
            <>
                <Typography>There are no documents currently uploaded. Upload relevant case documents by clicking the button below.</Typography>

                <form onSubmit={handleSubmitUploader}>
                    <input required id="uploader" type="file" accept="image/*,.pdf,.doc" onChange={handleInputChanges}></input>
                    <button type="submit">Upload</button>
                </form>
            </>
        )
    }
}

/**
 *  Export component
 */

export default CaseDocumentsList;

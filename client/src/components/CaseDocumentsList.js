/**
 * Dependencies
 */

import React from "react";
import { documentsRef } from "../helpers/firebase";
import axioswithAuth from "../helpers/axioswithAuth";

/**
 * Define component
 */

function CaseDocumentsList(props) {
    function handleChangeUploader(e) {
        e.preventDefault();

        // Get file
        const file = e.target.files[0];

        if (file.size > 1e8) {
            alert("File is too large. Maximum limit is 100MB.");
            e.target.value = "";
        } else {
            // Create file ref (Example: /documents/:case_id/:file_name)
            const fileRef = documentsRef.child(`${props.case.id}/${file.name}`);

            // Upload file
            fileRef
                .put(file)
                .then(snapshot => {
                    console.log(
                        "Upload success!",
                        snapshot.constructor,
                        snapshot
                    );
                    axioswithAuth()
                        .post(`/cases/${props.case.id}/documents`, { file_name: file.name })
                        .then((res) => {
                            console.log("res", res);
                        }).catch((err) => {
                            console.error("error", err)
                        });
                })
                .catch(err => {
                    console.error(err);
                });
        }
    }

    return (
        <input
            id="uploader"
            type="file"
            accept="image/*,.pdf,.doc"
            onChange={handleChangeUploader}
        ></input>
    );
}

/**
 *  Export component
 */

export default CaseDocumentsList;

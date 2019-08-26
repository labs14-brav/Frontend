import React, { useEffect, useState } from 'react';
import { documentsRef } from '../helpers/firebase';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


function CaseDocument(props) {
    const [link, setLink]= useState('');
    console.log('Case Document Props', props);
    const fileRef = documentsRef.child(`${props.case.id}/${props.document.file_name}`);

    useEffect(() => {
        // console.log('Handling download for: ', props.document.file_name);
        // fileRef.getDownloadURL()
        // .then(res => {
        //     console.log('getDownloadURL res', res)
        //     setLink(res);
        // })
        // .catch(error => {
        //     console.error(error);
        // })
    }, [])

    function handleClick(e) {
        e.preventDefault();
        console.log('Inside click');

        fileRef.getDownloadURL()
            .then(res => {
                var xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.onload = function(e) {
                    if (this.status == 200) {
                        // Create a new Blob object using the 
                        //response data of the onload object
                        var blob = new Blob([xhr.response], {type: xhr.response.type});
                        //Create a link element, hide it, direct 
                        //it towards the blob, and then 'click' it programatically
                        let a = document.createElement("a");
                        a.style = "display: none";
                        document.body.appendChild(a);
                        //Create a DOMString representing the blob 
                        //and point the link element towards it
                        let url = window.URL.createObjectURL(blob);
                        a.href = url;
                        a.download = ``;
                        //programatically click the link to trigger the download
                        a.click();
                        //release the reference to the file by revoking the Object URL
                        window.URL.revokeObjectURL(url);
                    } else{
                        //deal with your error state here
                        console.error('Something went wrong with the file download.');
                    }
                };
                // xhr.onload = function(event) {
                //     console.log('On Load');
                //     var blob = xhr.response;
                //     console.log('Blob', blob);
                // };
                // console.log(res);
                console.log(xhr);
                xhr.open('GET', res);
                xhr.onerror = function(error) {
                    console.error(error);
                }
                xhr.send();
            })
            .catch(err => {
                console.error(err);
            })
        // var xhr = new XMLHttpRequest();
        // xhr.responseType = 'blob';
        // xhr.onload = function(event) {
        //     var blob = xhr.response;
        // };
        // console.log(link);
        // xhr.open('GET', link);
        // xhr.send();
    }
    return(
        <>
            <li>
                <Typography>{props.document.file_name}</Typography>
                <a href={link} download>Download file</a>
                <Button onClick={handleClick}> Download button </Button>
            </li>
        </>
    )
}

export default CaseDocument;
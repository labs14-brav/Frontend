import React, { useEffect,useState } from 'react'
import axios from 'axios';


export default function CaseDetails(props) {

    const [_case,setCase]= useState({})

    useEffect(() => {
        async function fetchCase() {

          const res = await axios.get(`${process.env.REACT_APP_API_URL}/cases/${props.match.params.id}`,{
            headers: {
              "Authorization": localStorage.getItem('token'),
            },});
          console.log(res,"response")
          setCase(res.data);
        }
        fetchCase()
      },[]);

   

    
    return (
        <div>
            <p>{_case.description}</p>
        </div>
    )
}

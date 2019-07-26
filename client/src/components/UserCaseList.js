import React, { useState, useEffect } from 'react';



const UserCaseList = (props) => {
    const [cases, setCases] = useState([]);

    useEffect(() => {
        async function fetchCases() {
            const res = await axioswithAuth().get(`${process.env.REACT_APP_API_URL}/cases`)

        }
    })
    return (

    )
}
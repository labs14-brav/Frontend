import React, { useState, useEffect } from 'react';
import UserCaseCard from './UserCaseCard';


let fakecases = [
    {   id: 1,
        name: "lala",
    },
    {
        id: 2,
        name: "lala",
    }
]

const UserCaseList = (props) => {
    const [cases, setCases] = useState([]);

    useEffect(() => {
        async function fetchCases() {
            //const res = await axioswithAuth().get(`${process.env.REACT_APP_API_URL}/cases`)
            //setCases(res.data);
            setCases(fakecases);
        }

        fetchCases();
    }, []);

    return (
        <div className="list-container">
            {cases.map(ele => {
                return <UserCaseCard case={ele} />
            })}
        </div>
    )
}


export default UserCaseList;
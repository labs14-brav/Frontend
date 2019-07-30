import React, { useState, useEffect } from "react";
import UserCaseCard from "./UserCaseCard";

import axioswithAuth from "../helpers/axioswithAuth";

const MediatorCaseList = props => {
    const [cases, setCases] = useState([]);

    useEffect(() => {
        async function fetchCases() {
            const res = await axioswithAuth().get(
                `${process.env.REACT_APP_API_URL}/cases`
            );
            // endpoint needs to be updated to a specific user's cases.
            setCases(res.data);
        }
        fetchCases();
    }, []);

    return (
        <div className="list-container">
            {cases.map(ele => {
                return <UserCaseCard case={ele} key={ele.id} />;
            })}
        </div>
    );
};

export default MediatorCaseList;

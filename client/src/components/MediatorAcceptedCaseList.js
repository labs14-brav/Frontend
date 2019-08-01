import React, { useState, useEffect } from "react";
import MediatorCaseCard from "./MediatorCaseCard";

import axioswithAuth from "../helpers/axioswithAuth";

const MediatorAcceptedCaseList = props => {
    const [cases, setCases] = useState([]);

    async function fetchCases() {
        const res = await axioswithAuth().get(
            `${process.env.REACT_APP_API_URL}/cases/accepted-cases`
        );
        // endpoint needs to be updated to a specific user's cases.
        setCases(res.data.fetch_cases);
    }

    useEffect(() => {
        fetchCases();
    }, []);

    return (
        <div className="list-container">
            {cases.map(ele => {
                return <MediatorCaseCard fetchCases={fetchCases} case={ele} key={ele.id} />;
            })}
        </div>
    );
};

export default MediatorAcceptedCaseList;
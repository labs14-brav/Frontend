import React, { useState, useEffect } from "react";
import MediatorCaseCard from "./MediatorCaseCard";

import axioswithAuth from "../helpers/axioswithAuth";

const MediatorCompletedCaseList = props => {
    const [cases, setCases] = useState([]);

    async function fetchCases() {
        const mediatorId = localStorage.getItem("id");
        const res = await axioswithAuth().get(
            `/cases/${mediatorId}/completed-cases`
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

export default MediatorCompletedCaseList;
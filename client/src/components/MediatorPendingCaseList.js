/**
 * Dependencies
 */

import React, { useState, useEffect } from "react";
import MediatorCaseCard from "./MediatorCaseCard";
import axioswithAuth from "../helpers/axioswithAuth";

/**
 * Import styles
 */

import '../views/styles/MediatorCasesShow.scss';

/**
 * Define component
 */

const MediatorCaseList = props => {
  const [cases, setCases] = useState([]);

  async function fetchCases() {
    const mediatorId = localStorage.getItem("id");
    const res = await axioswithAuth().get(`/cases/${mediatorId}/pending-cases`);
    setCases(res.data.fetch_cases);
  }

  useEffect(() => {
    fetchCases();
  }, []);

  return (
    <div className="list-container">
      {cases && cases.map(c => {
        return <MediatorCaseCard fetchCases={fetchCases} case={c} key={c.id} />;
      })}
    </div>
  );
};

/**
 * Export component
 */

export default MediatorCaseList;

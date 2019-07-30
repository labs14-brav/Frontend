import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

import { Button, Card, makeStyles, Container } from "@material-ui/core";

import { NavBar } from "../components";
import MediatorCaseList from "../components/MediatorCaseList";

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        borderColor: "black"
    }
});

export default function MediatorCasesShow() {
    const classes = useStyles();

    const [cases, setCases] = useState([]);
    useEffect(() => {
        async function fetchCases() {
            const res = await axios.get(
                `${process.env.REACT_APP_API_URL}/cases`,
                {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                }
            );
            setCases(res.data);
        }
        fetchCases();
    }, []);

    return (
        <>
            <NavBar />
            <div className="mediator-cases-show">
                <MediatorCaseList />
            </div>
        </>
    );
}

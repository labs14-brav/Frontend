import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

import { Button, Card, makeStyles, Container } from "@material-ui/core";

import { NavBar } from "../components";
import {
    MediatorPendingCaseList,
    MediatorAcceptedCaseList,
    MediatorDeclinedCaseList
} from "../components";

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        borderColor: "black"
    }
});

export default function MediatorCasesShow() {
    const classes = useStyles();

    const [selectedTab, setSelectedTab] = useState("pending")

    useEffect(() => {
        
    }, []);

    return (
        <>
            <NavBar />
            <div className="mediator-cases-show">
                <Button onClick={() => setSelectedTab("pending")}>Pending</Button>
                <Button onClick={() => setSelectedTab("accepted")}>Accepted</Button>
                <Button onClick={() => setSelectedTab("declined")} >Declined</Button>
               { selectedTab === "pending" ? <div>
                    <hi>Pending</hi>
                    <MediatorPendingCaseList />
                </div> : null }
                { selectedTab === "accepted" ? <div>
                <hi>Accepted</hi>
                <MediatorAcceptedCaseList />
                </div> : null}
                { selectedTab === "declined" ? <div>
                    <hi>Declined</hi>
                    <MediatorDeclinedCaseList />
                </div> : null}
            </div>
        </>
    );
}

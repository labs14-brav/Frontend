import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
// import { MediatorCasesShowStyle } from './styles/index'

import { Button, Card, makeStyles, Container } from "@material-ui/core";

import { NavBar,SideNavBlock } from "../components";
import {
    MediatorPendingCaseList,
    MediatorAcceptedCaseList,
    MediatorCompletedCaseList
} from "../components";

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        borderColor: "black"
    }
});

export default function MediatorCasesShow() {
    const classes = useStyles();

    const [selectedTab, setSelectedTab] = useState("pending");

    useEffect(() => {
        
    }, []);

    // <Grid container>
    // <Grid item xs={8} sm={9} lg={10} className="bg-brav" style={{paddingTop: "50px", backgroundColor: "#ECF6FF"}} className="mediator-cases-show">
    return (
        <>
            <Button onClick={() => setSelectedTab("pending")}>Pending</Button>
            <Button onClick={() => setSelectedTab("accepted")}>Accepted</Button>
            <Button onClick={() => setSelectedTab("completed")} >Completed</Button>
            { selectedTab === "pending" ? <div>
                <hi>Pending</hi>
                <MediatorPendingCaseList />
            </div> : null }
            { selectedTab === "accepted" ? <div>
            <hi>Accepted</hi>
            <MediatorAcceptedCaseList />
            </div> : null}
            { selectedTab === "completed" ? <div>
                <hi>Completed</hi>
                <MediatorCompletedCaseList />
            </div> : null}
        </>
    );
}

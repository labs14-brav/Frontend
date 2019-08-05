/**
 * Dependencies
 */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavBar, SideNavBlock } from "../components/index";
import { Link } from "react-router-dom";
import { 
    Button,
    Grid, 
} from "@material-ui/core";
import {
    HeaderH1,
    HeaderH2,
    HeaderH3,
    BecomeMediatorLink,
    EditUserLink,
  } from './styles/index'

import {axioswithAuth} from '../helpers/index'
import SendRequestButton from "../components/SendRequestButton";

/**
 * Locals
 */

function Home() {
    const [users, setUsers] = useState([]);
    const [offset, setOffset] = useState(0);

    return (
        <div style={{paddingTop:"15%"}}>

                <Button  variant="outlined" color="primary"><Link to="/cases/new" style={{ textDecoration:"none"}}>Create A Case</Link></Button>
    
        </div>
    );
}

export default Home;

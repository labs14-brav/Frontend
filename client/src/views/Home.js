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

/**
 * Locals
 */

let baseurl
if (process.env.NODE_ENV === 'production')
{
   baseurl = "https://bravproduction.herokuapp.com/users?offset="
}else if(process.env.NODE_ENV === 'staging')
{
  baseurl = "https://brav-staging.herokuapp.com/users?offset="
}
else
{
   baseurl = "http://localhost:8888/users?offset="
}

function Home() {
    const [users, setUsers] = useState([]);
    const [offset, setOffset] = useState(0);

    // useEffect(() => {
    //   async function fetchUsers() {
    //     const res = await axios.get(`${process.env.REACT_APP_API_URL}/users`);
    //     setUsers(res.data);
    //   }

    //   fetchUsers()
    // }, [offset]);

    return (
        <div style={{paddingTop:"15%"}}>
         
        

                <Button  variant="outlined" color="primary"><Link to="/cases/new" style={{ textDecoration:"none"}}>Create A Case</Link></Button>

    
        </div>
    );
}

export default Home;

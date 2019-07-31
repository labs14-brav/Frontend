/**
 * Dependencies
 */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavBar } from "../components/index";
import { Link } from "react-router-dom";

import { Button } from "@material-ui/core";

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
        <>
            <NavBar />
            <div className="home">
                <Link to="/cases/new">
                    <Button variant="contained" color="primary">
                        {" "}
                        Create a Case{" "}
                    </Button>
                </Link>
                <Link to="/cases">
                    <Button variant="contained" color="primary">
                        View Cases - User
                    </Button>
                </Link>
                <Link to="/mediator-cases">
                    <Button variant="contained" color="primary">
                        View Cases - Mediator
                    </Button>
                </Link>
            </div>
        </>
    );
}

export default Home;

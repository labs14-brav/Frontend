/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavBar } from '../components/index';
import { Link } from 'react-router-dom';

import {
  Button
} from "@material-ui/core";

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

/**
 * Define view
 */

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
    <div className="App">
      <NavBar logout='' />

      <div className="container">
        <div className="row">
          <div className="col-12">
           <h1>Welcome to brav</h1>
            <Link to="/cases"><Button variant="contained" color="primary"> View Cases </Button></Link><br/>
            <Link to="/cases/new" ><Button variant="contained" color="primary" > Create a Case </Button></Link>
            <Link to="/users/settings" ><Button variant="contained" color="primary" > settings </Button></Link>
          </div>
        </div>
      </div>
    </div>
  )
};

/**
 * Export view
 */

export default Home;

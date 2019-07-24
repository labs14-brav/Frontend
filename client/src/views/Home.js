/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';


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

  useEffect(() => {
    async function fetchUsers() {
      const res = await axios.get("https://bravproduction.herokuapp.com/users");
      setUsers(res.data);
    }

    fetchUsers()
  }, [offset]);

  return (
    <div className="App">
      <NavBar logout='' />

      <div className="container">
        <div className="row">
          <div className="col-12">
            <header className="App-header"><h4>Hello Brāv!</h4></header>

            <label htmlFor="input-offset">Offset</label><br/>
            <input id="input-offset" type="number" name="offset" value={offset} onChange={(e) => setOffset(e.target.value)}/>

            <ul>
              {users.map((user, index) => {
                return <li key={index}> {user.id} -- {user.email} -- {user.type} </li>
              })}
            </ul>
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

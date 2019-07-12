/**
 * Dependencies
 */

import React from 'react';
import axios from 'axios';
import NavBar from "../components/NavBar";

/**
 * Define view
 */

class Landing extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <header className="App-header">Hello Brav!!</header>
        <input type="number" name="offset" value={this.state.offset} onChange={this.offSetHandler}/>
        <ul>
          {this.state.users.map(user => {
            return <li> {user.id} -- {user.username} -- {user.type} </li>
          })}
        </ul>
      </div>
    )
  }
}

/**
 * Export view
 */

export default Landing

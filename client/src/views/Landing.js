/**
 * Dependencies
 */

import React from 'react';
import axios from 'axios';
import NavBar from "../components/NavBar";
import { tsParenthesizedType } from "@babel/types";

/**
 * Define view
 */

class Home extends React.Component {
  state = {
    users: [],
    offset: 0
  };

  componentDidMount() {
      axios
        .get(baseurl)
        .then(res => {
          this.setState({users: res.data});
        })
  }

  offSetHandler=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  componentDidUpdate() {
      axios
      .get(`${baseurl}${this.state.offset}`)
      .then(res=> {
        this.setState({users: res.data})
      })
  }

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

export default Home

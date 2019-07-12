import React from "react";
import axios from 'axios';
import "./App.css";
import NavBar from "./components/NavBar";

let baseurl
if(process.env.NODE_ENV=='production'){
   baseurl="https://bravproduction.herokuapp.com/users"
}else{
   baseurl="https://brav-staging.herokuapp.com/users?offset="
}

class App extends React.Component {
  state = {
    users: [],
    offset:0
  };

  componentDidMount() {
      axios
        .get(baseurl)
        .then(res => {
          console.log(res.data);
          this.setState({users: res.data});
        })
  }
  offSetHandler=(e)=>{
    console.log(e.target.value)

    this.setState({
      [e.target.name]:e.target.value
    })
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">Hello Brav!!</header>
        <input type="number" name="offset" value={this.state.offset} onChange={this.offSetHandler}/>
        <ul>
          {this.state.users.map(user => {
            return <li> {user.username} -- {user.type} </li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;

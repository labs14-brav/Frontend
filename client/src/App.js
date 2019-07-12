import React from "react";
import axios from 'axios';
import "./App.css";

class App extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
      axios
        .get("https://bravproduction.herokuapp.com/users")
        .then(res => {
          console.log(res.data);
          this.setState({users: res.data});
        })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Hello Brav!!</header>
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

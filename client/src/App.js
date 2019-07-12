import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RootRouter } from './routes/index';
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <RootRouter mount="/" />
      </BrowserRouter>
    );
  }
}

export default App;

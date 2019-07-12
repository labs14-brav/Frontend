/**
 * Dependencies
 */

import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RootRouter } from './routes/index';
import "./App.css";

/**
 * Define component
 */

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <RootRouter mount="/" />
      </BrowserRouter>
    );
  }
}

/**
 * Export component
 */

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CatBreeds from "./components/cats/CatBreeds";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <CatBreeds/>
        </header>
      </div>
    );
  }
}

export default App;

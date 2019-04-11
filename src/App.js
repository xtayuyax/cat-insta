import React, { Component } from 'react';
import './App.css';

import CatBreeds from "./components/cats/CatBreeds";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CatBreeds/>
        </header>
      </div>
    );
  }
}

export default App;

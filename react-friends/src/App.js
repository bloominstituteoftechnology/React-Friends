import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { people } from './people.js';

// import people array of objects from people.js
// create componenDidMount(){}

class App extends Component {
  // create constructor with a state object{...}
  constructor() {
    super();
    this.state = {
      people: []
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PeopleList from "./PeopleList";
import {people} from './people.js' ;

class App extends Component {
  constructor(){
    super();
    this.state = {
      People: []
    };

  }

  componentWillMount() {
    this.setState({ people });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <PeopleList people={this.state.people} />
        </div>
      </div>
    );
  }
}

export default App;

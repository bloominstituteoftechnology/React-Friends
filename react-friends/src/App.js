
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { people } from './people.js';
import PeopleList from './PeopleList.js';



class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    // 'fetch' our peoples data.
    console.log(people);
    // set people on state for use in PeopleList
    this.setState({ people: people });
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
        <PeopleList people={people} />
      </div>
    );
  }
}

export default App;
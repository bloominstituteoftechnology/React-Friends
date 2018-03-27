import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { people } from './people';
import PeopleList from './PeopleList'

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      People: [] 
    };
  }

  componentDidMount () {
    // const { people } = people;
    this.setState ({ People: people });
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">People List, Stalker mode engaged!</h1>
        </header>
        <p className="App-intro">
          Give me everyones information even if they don't know me!
        </p>
        <PeopleList people={this.state.People} />
      </div>
    );
  }
}

export default App;

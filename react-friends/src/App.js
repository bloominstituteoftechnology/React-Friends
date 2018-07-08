import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import { people } from './people.js';
import PeopleList  from './PeopleList.js';

class App extends Component {
  constructor () {
    super();
    this.state = {
      people: [],
    };
  }

  componentDidMount() {
    this.setState({ people });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <PeopleList people = {this.state.people} />;
      </div>
    );
  }
}

export default App;

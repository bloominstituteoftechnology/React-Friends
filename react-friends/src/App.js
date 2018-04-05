import React, { Component } from 'react';
import logo from './logo.svg';
import { people } from './people.js';
import PeopleList from './PeopleList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    this.setState({ people: people });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            React Friends
          </h1>
        </header>
        <PeopleList people={this.state.people}/>
      </div>
    );
  }
}

export default App;

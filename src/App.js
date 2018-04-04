import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { people } from './people.js';
import PeopleList from './PeopleList.js';

class App extends Component {
  componentWillMount() {
    this.setState({ people: people }, () => console.log(this.state));
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

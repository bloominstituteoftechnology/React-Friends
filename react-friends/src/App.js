import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  PeopleList  from './PeopleList';
import {people} from './people.js'




class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    this.setState({friends: people});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Friends and their emails
        </p>
          <button>i dont work</button>
        <PeopleList
        friends={this.state.friends}
        />
      </div>
    );
  }
}

export default App;

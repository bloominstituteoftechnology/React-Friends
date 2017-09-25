import React, { Component } from 'react';
import logo from './logo.svg';
import { people } from './people';
import PeopleList from './PeopleList';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = { People: [] };
  }

componentDidMount() {
  this.setState({ People: people });
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to People List!</h2>
        </div>
        <p className="App-intro">
          List all the people!
        </p>
        <PeopleList people={this.state.People} />
      </div>
    );
  }
}

export default App;

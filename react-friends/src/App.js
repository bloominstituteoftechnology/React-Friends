import React, { Component } from 'react';
import logo from './App.css';
import  { people }  from './people';
import  { PeopleList }  from './PeopleList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }

  componentWillMount() {
    this.setState({ people: people });
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

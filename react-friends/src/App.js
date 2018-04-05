import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { people } from './people.js';
import { PeopleList } from './PeopleList'

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
      // <p className="App-intro">
      //   This has been edited <code>src/App.js</code>
      // </p>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">PeopleList</h1>
        </header>
        <div className="container">
          <PeopleList people={this.state.people} />
        </div>
      </div>
    );
  }
}
export default App;
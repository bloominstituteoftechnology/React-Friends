import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { people } from './people.js';
import { PeopleList } from './PeopleList'
// import { Table } from './Table'     //experimenting to display all info in sortable table
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
          <h1 className="App-title">Kaitlyn's PeopleList</h1>
        </header>
        <div className="container">
          <PeopleList people={this.state.people} />
        </div>
      </div>
    );
  }
}
export default App;
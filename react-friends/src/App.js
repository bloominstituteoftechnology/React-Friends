import React, { Component } from 'react';
import { people } from './people.js';
import PeopleList from './PeopleList.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    }
  }
  componentDidMount() {
    this.setState({ people });
  }
  render() {
    return (
      <div className="App">
        <h1>People List</h1>
        <PeopleList people={this.state.people} />
      </div>
    );
  }
}

export default App;

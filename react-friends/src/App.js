import React, { Component } from 'react';
import './App.css';
import { people } from './people.js';
import { PeopleList } from './PeopleList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "People",
      people: []
    };
  }

  componentDidMount() {
    console.log("CDM Checkin", this.state.people);
    this.setState({ people });
  }
  // defer

  render() {
    return (
      <PeopleList name={this.state.name} people={this.state.people} />
    );
  }
}
export default App;

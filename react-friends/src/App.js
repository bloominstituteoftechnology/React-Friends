import React, { Component } from 'react';
import './App.css';
import { people } from './people.js';
import PeopleList from './PeopleList.js';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    // fetching the data of people
    console.log(people);
    // set the people on state for use in PeopleList
    this.setState({ people: people });
  }

  render() {
    return (
      <PeopleList people={this.state.people} />
    );
  }
}

export default App;

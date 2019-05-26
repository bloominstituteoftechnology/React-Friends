import React, { Component } from 'react';
import './App.css';
import { people } from './people.js';
import PeopleList from './PeopleList.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    this.setState({
      people
    });
  }

  render() {
    return (
      <PeopleList people={this.state.people} />
    );
  }
}

export default App;

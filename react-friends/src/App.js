import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { people } from './people';
import { PeopleList } from './PeopleList';

class App extends Component {
  constructor() {
    super();
    this.people = {
      people: []
    };
  }

  componentDidMount() {
    this.setState({ people: people.data });
  }

  render() {
    return (
      <PeopleList people={this.state.people} />
    );
  }  
}

export default App;
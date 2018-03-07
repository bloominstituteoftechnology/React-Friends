import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { people } from './people';
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
    const { data } = people;
    console.log("CDM Checkin", this.state.people);
    this.setState({ people: data });
  }

  render() {
    return (
      <PeopleList name={this.state.name} people={this.state.people} />
    );
  }
}
export default App;

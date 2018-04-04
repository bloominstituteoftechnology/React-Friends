import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { people } from './people.js';
import  PeopleList from './peopleList.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }

  componentDidMount() {

    console.log(people);
    this.setState({ people: people });
    console.log(this.state)

  }
  render() {
    return (
     <PeopleList peopleProp={this.state.people} />
    );
  }
}

export default App;

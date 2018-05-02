import React, { Component } from 'react';
import './App.css';
import PeopleList from "./peoplelist.js";
import { people } from './people.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
  this.setState({ friends: people });
}

  render() {
    return (
      <div>
        <PeopleList myPeople={this.state.friends}/>
      </div>
    );
  }
}

export default App;

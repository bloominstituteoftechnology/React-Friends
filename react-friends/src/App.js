import React, { Component } from 'react';
import './PeopleList.css';
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
    this.setState({people})
  }
  render() {
    return (
      <div className="App">
        <h1> Email List </h1>
        <PeopleList people={this.state.people} />

      </div>
    );
  }
}

export default App;

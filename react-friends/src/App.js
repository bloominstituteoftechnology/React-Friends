import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { people } from './people';
import { PeopleList } from './PeopleList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
    }
  }
  componentDidMount() {
    this.setState(
      {people},)
  }
  render() {

    return (
      <div className="App">
        <PeopleList people={this.state.people}/>
      </div>
    );
  }
}

export default App;

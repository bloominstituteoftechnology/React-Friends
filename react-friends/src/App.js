import React, { Component } from 'react';
import './App.css';
import { people } from './people.js';
import { PeopleList }  from './PeopleList.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      People: [],
    }
  }
  componentDidMount () {
    this.setState({People: people});
  }
  render() {
    return (
      <div className="App">
        <h3>All of My People</h3>
        <PeopleList people={this.state.People}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { people } from './people.js';
import { PeopleList } from './PeopleList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      People: []
    }
  }

  componentDidMount() {
   this.setState({
     People: people
    });
  }

  render() {
    return (
      <div className="App">
          <PeopleList People={this.state.People} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { people } from './people';
import { PeopleList } from './PeopleList.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      People: []
    };
  }

  componentDidMount() {
    this.setState({People: people});
  }

  render() {
    return (
      <div className="App">
        <PeopleList people={this.state.People} />
      </div>
    );
  }
}

export default App;

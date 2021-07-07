import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { PeopleList } from './PeopleList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      People: [],
    };
  }

  componentDidMount() {
    this.setState({People: people});
  }

  render() {
    return (
      <div className="App">
        <h1>Hello React App</h1>
        <PeopleList people={this.state.People} />
      </div>
    );
  }
}

export default App;

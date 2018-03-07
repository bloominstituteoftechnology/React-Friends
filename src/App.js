import React, { Component } from 'react';
import './App.css';
import { people } from './People.js';
import { PeopleList } from './PeopleList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      People: [],
    };
  }

/*class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );*/

    componentDidMount() {
      this.setState( { People: people});
    }

    render () {
      console.log("Rendered Called: ", this.state.People);
      return <PeopleList People={this.state.People} />;
    }


  }

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { people } from './people';
import { PeopleList } from './PeopleList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      People: [],
    }
  }

  componentDidMount () {
    // console.log('CDM initialized');
    this.setState({
      People: people,
    });
  }

  render() {
    // console.log('render initialized');
    // console.log(this.state.People);
    return (
      // my returning div is here..
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Dante!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <PeopleList people={this.state.People} />

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import { people } from './people.js';
import PeopleList from './PeopleList'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      People: []
    };
  }

  componentDidMount(){
    this.setState({ People: people });
   }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <PeopleList people = {this.state.People}/>
        </p>
      </div>
    );
  }
}





export default App;

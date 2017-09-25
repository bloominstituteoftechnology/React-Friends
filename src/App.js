import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {people} from './people.js';
import PeopleList from './PeopleList';
import lambda from './lambdawhite.png'

class App extends Component {
  constructor(){
    super();
    this.state ={
      People:[]
    };
  }
  componentDidMount() {
    this.setState({
      People: people
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={lambda} />
          <h2>React Mini-Sprint II</h2>
        </div>
        <PeopleList people={this.state.People} />
        
      </div>
    );
  }
}

export default App;

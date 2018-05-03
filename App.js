import React, { Component } from 'react';
//import for people.js
import { people } from './people.js';
//import for PeopleList.js 
import PeopleList from './PeopleList'
import logo from './logo.svg';
import './App.css';

//constructor function 
// class App extends Component {
//   constructor() {
//     super();
//     //setting the state 
//     this.state() = {
//       people: []
//     };
//   };
class App extends Component {
  constructor() {
    super();
    this.state = {
      peoples: []
    };
  }
  //CDM method
  componentDidMount() {
    this.setState({ peoples: people });
  }

  //render method i.e. html on the screen and also other methods from other components
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Meet New People!</h1>
        </header>
        <PeopleList peoples={this.state.peoples}/>
      </div>
    )
  }
}

export default App;
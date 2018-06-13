import React, { Component } from 'react';
import {people} from './people.js';
import PeopleList from './PeopleList.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list : people
    };
  }
  componentDidMount = () =>{
    return (this.state.list !== undefined) ? true: false;
  }
  render() {
    if (this.componentDidMount()){
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <PeopleList people={this.state.list} />
        </div>
      );
    }
    else {
      return (
        <div>Failed to mount</div>
      );
    }
  }
}

export default App;

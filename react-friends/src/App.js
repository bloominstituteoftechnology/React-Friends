import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { people } from "./people";
import PeopleList from './PeopleList'

class App extends Component {
  constructor(){
    super();
    this.state = {
      people: []
    }
  }
  componentDidMount(){
    this.setState( {people} );
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <PeopleList people={this.state.people} display={this.state.display}/>
      </div>
    );
  }
}

export default App;
 
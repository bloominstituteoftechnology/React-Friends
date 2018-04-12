import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { people } from './people.js';
import  PeopleList  from './PeopleList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      peoples: people,

    };
  }
  componentDidMount() {
    this.setState({ peoples: people });
     console.log(this.state.peoples);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{/*this.state.peoples*/}i get this error everywhere</h1>
        </header>
         <PeopleList pep={this.state.peoples} /> 
      </div>
    );
  }
}

export default App;

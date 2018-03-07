import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './PeopleList.css';
import { people } from './people';
import PeopleList from './PeopleList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      People: []
    };
  }
  componentDidMount() {
    this.setState({ People: people});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
        </header>
        
        <div classList="peopleListDiv"><PeopleList people={this.state.People} /></div>
      </div>
    );
  }
}

export default App;

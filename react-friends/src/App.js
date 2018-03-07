import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { people } from './people.js'
import { PeopleList } from './PeopleList.js'

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
    console.log("Render Called: ", this.state.friends);
    return (
      <div className="App">
        <h1>Names of People</h1>
        <PeopleList people={this.state.People} />
      </div>
    );
  }
}

export default App;

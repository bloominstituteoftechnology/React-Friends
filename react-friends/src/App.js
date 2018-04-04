import React, { Component } from 'react';
import './App.css';
import PeopleList from "./PeopleList";
import {people} from './people.js' ;

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    this.setState({ people: people}, () => console.log(this.state));
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <PeopleList peopleProp={this.state.people} />
        </div>
      </div>
    );
  }
}

export default App;

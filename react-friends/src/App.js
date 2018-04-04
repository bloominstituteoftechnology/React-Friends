import React, { Component } from 'react';
import './App.css';
import { people } from './people'; // array received from the people.js
import { PeopleList } from './PeopleList';

export default class App extends Component {
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
    return (
      <div className="App">
      <PeopleList people={this.state.People}/>
      </div>
    );
  }
}

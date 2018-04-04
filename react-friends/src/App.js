import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {people} from "./people.js"
import { PeopleList } from "./PeopleList"


class App extends Component {
  constructor() {
    super();
    this.state = {
      People: []
    }
   
  }

  componentDidMount(){
    this.setState({ people: people });
   }

  render() {
    return (
      <PeopleList/>
    );
  }
}

export default App;

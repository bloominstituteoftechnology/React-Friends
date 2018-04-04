import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { people } from './people.js';
import PeopleList from './PeopleList.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      people: [],
    }
  }
}

export default App;

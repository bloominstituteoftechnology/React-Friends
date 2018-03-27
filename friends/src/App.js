import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { people } from './people';
import PeopleList from './PeopleList'

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      People: [] 
    };
  }

  componentDidMount () {
    // const { people } = people;
    this.setState ({ People: people });
  }

  render() {
    return (
      <div className="App">
        <PeopleList people={this.state.People} />
      </div>
    );
  }
}

export default App;

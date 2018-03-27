import React, { Component } from 'react';
import { people } from './people';
import PeopleList from './PeopleList';
import './App.css';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      people: [],
    }
  }
  componentDidMount() {
    return this.setState({ people: people })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Friends</h1>
        </header>
        <PeopleList name={this.state.people} />
      </div>
    );
  }
}

export default App;

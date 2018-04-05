import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { people } from './people';
import { PeopleList } from './PeopleList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    this.setState(prevState => ({ people }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          The following is a list of names and emails:
        </p>
        <PeopleList people={this.state.people} />
      </div>
    );
  }
}

export default App;
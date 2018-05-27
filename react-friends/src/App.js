import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import people from './people.js';
import PeopleList from './PeopleList';
//yarn add bootstrap reactstrap // to do css stuff

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    }
  }

  componentDidMount = () => {
    console.log('CDM called');
    this.setState({ people });
  }

  render() {
    console.log('RENDER called');
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Custom App 4 Ppl</h1>
        </header>
        <PeopleList {...this.state} />
      </div>
    );
  }
}

export default App;

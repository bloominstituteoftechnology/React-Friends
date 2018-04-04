import React, { Component } from 'react';
import { render } from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { people } from './people.js';
import PeopleList from './PeopleList.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }

  // App prototype methods
  componentDidMount = () => {
    this.setState({ "people": people });
    // console.log(people);
    // console.log(this.state);
    // console.log(this.state.people); this does not work?
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <PeopleList people={this.state.people} />
      </div>
    );
  }
}

export default App;
render(<App />, document.getElementById('root'));
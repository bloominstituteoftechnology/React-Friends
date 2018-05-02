import React, { Component } from 'react';
import Dropdown from './Dropdown';
import PeopleList from './PeopleList';
import logo from './logo.svg';
import './App.css';
import { people } from './people';



class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    this.setState({ friends: people })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Friends</h1>
          <Dropdown />
        </header>
        <PeopleList
          friends={this.state.friends}
        />
      </div>
    );
  }
}

export default App;

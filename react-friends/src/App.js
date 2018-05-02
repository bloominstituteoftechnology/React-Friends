import React, { Component } from 'react';
import PeopleList from './PeopleList'
import logo from './logo.svg';
import './App.css';
import { people } from './people.js';



class App extends Component {
  constructor () {
    super();
    this.state = {
      friends: [],
      showMenu: false
    };
  }
  componentDidMount() {
    this.setState( { friends: people } )
  }
  showMenu(event) {
    event.preventDefault();
      this.setState(
        {showMenu: true,
  });
}
this.
  render () {
    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to Friendship</h1>
          </header>
          <PeopleList 
          friends={this.state.friends}
          showMenu={this.state.showMenu} />
      </div>
    )
  }
}

export default App;

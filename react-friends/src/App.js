import React, { Component } from 'react';
import './App.css';
import FriendsList from "./friendslist.js";

class App extends Component {

  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
  this.setState({ friends: people });
}

  render() {
    return (
      <div>
        <FriendsList myPeople={this.state.friends}/>
      </div>
    );
  }
}

export default App;

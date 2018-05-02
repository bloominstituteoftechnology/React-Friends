import React, { Component } from "react";
import FriendsList from "./FriendsList";
import './App.css';
import { people } from "./people";

class App extends Component {
  constructor () {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    this.setState({ friends: people });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Friends</h1>
        </header>
	<FriendsList
	  friends={this.state.friends}/>
      </div>
    );
  }
}

export default App;

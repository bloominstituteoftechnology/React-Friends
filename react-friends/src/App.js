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
      showFriends: false,
    };
  }  
  showFriendsFunction() {
    const { showFriends } = this.state.showFriends;
    this.setState({
      showFriends: !showFriends
    })
  }
  componentDidMount() {
    this.setState( { friends: people } )
  }


  render () {
    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to Friendship</h1>
          </header>
          <PeopleList 
          friends={this.state.friends}
          onClick={() => this.showFriendsFunction()}
          showFriends={this.state.showFriends} />
      </div>
    )
  }
}

export default App;

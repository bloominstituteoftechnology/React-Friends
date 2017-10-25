import React, { Component } from 'react';
import './App.css';

import { people } from './people.js';
import PeopleList from './PeopleList.js';

class App extends Component {
constructor(){
  super(); //allows us to maintain this.whatever
  this.state = {
    people: []
  }
}

componentDidMount() {//react looks for this component on its own just like render
  const sortedPeople = people.sort((a, b) => {
    return a.last_name_name - b.last_name;
  });
  this.setState({people: sortedPeople});
}

  render() {
    return (
      <div className="App">
        <PeopleList people={this.state.people} />
      </div>
    );
  }
}

export default App;

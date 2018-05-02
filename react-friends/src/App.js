import React, { Component } from 'react';
import { people }  from './people.js';
import PeopleList  from './PeopleList.js';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      people: []
    };
  }
  componentDidMount(){
    this.setState({ people: people });
  }
  render() {
    return (
      <div>
        <PeopleList people={this.state.people} />
      </div>
    );
  }
}

export default App;

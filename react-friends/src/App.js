import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { people } from './people'
import { PeopleList } from './peopleList'

class App extends Component {
  constructor(){
    super();
    this.state = {
      people: [],
      name: "People"
    };
  }

componentDidMount() {
const { data } = people;
this.setState({ people: people });
}

  render() {
    return (
      <div className="App">
        <h1>People List</h1>
        <PeopleList people={this.state.people} />
      </div>      
    );
  }
}

export default App;

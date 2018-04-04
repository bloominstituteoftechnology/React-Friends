import React, { Component } from 'react';
import logo from './logo.svg';
import { people }  from './people';
import PeopleList from './components/PeopleList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };

  }

  componentDidMount() {
    this.setState({ people: people });
  }
  render() {
    return (
      <div className="App">
        {this.state.people.map(person => <div>{person.first_name + ' ' + person.last_name}</div>)}
      </div>
    );
  }
}

export default App;

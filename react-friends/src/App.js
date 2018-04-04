import React, { Component } from 'react';
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
      <PeopleList people={this.state.people} />
    );
  }
}

export default App;

import React, { Component } from 'react';
import { render } from 'react-dom';
import { people } from './people';
import { PeopleList } from './PeopleList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }

  componentWillMount() {
    this.setState({ people: people });
  }

  render() {
    return (
      <PeopleList people={this.state.people} />
    );
  }
}

export default App;

import React, { Component } from 'react';
import  { people }  from './people';
import  { PeopleList }  from './PeopleList';

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
      <div className="App">
        <div className="container">
          <PeopleList people={this.state.people} />
        </div>
      </div>
    );
  }
}

export default App;

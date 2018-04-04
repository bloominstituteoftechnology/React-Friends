import React, { Component } from 'react';
import { people } from './people';
import PeopleList from './components/peopleList';
class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    }
  }
  componentDidMount() {
    this.setState({
      people
    })
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

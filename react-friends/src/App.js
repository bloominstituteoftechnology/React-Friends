import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { people } from './people';
import PeopleList from './PeopleList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.setState({_people: people});
  }
  set people(people) {
    this.setState({_people: people});
  }
  get people() {
    return this.state._people;
  }
  render() {
    return (
      <div className="App">
        <PeopleList people={this.people} />
      </div>
    );
  }
}

export default App;

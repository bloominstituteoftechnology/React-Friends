import React, { Component } from 'react';
import './App.css';
import { People } from './People.js';
import { PeopleList} from './PeopleList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
    }
  }

  componentDidMount() {
    this.setState({ people: People})
  }

  render() {
    return (
      <div className="App">
       <h1 className="App-Header">Bunch of People I Never Met</h1>
       <PeopleList people={this.state.people} />
      </div>
    );
  }
}

export default App;

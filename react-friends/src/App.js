import React, { Component } from "react";
import PeopleList from "./PeopleList";
import "./App.css";
import { people } from "./people";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    // taking people, from people.js
    // calling setState to add people to our friends array.
    // ANY type of data fetching, SHOULD exist inside of CDM
    this.setState({ people: people });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Friends</h1>
        </header>
        <PeopleList
          people={this.state.people}
          messageFromAppjs="Some People Friends"
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { people } from "./people";
import { PeopleList } from "./components/PeopleList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      People: []
    };
  }

  componentDidMount() {
    this.setState({ People: people });
  }
  render() {
    return (
      <div className="App">
        <h1>People List</h1>
        <PeopleList people={this.state.People} />
      </div>
    );
  }
}
export default App;

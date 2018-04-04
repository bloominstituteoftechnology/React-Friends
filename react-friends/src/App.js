import React, { Component } from "react";
import { people } from "./people.js";
import PeopleList from "./PeopleList.js";

class App extends Component {
  constructor() {
    super();
    console.log(people);
    this.state = {
      people: []
    };
  }
  componentDidMount() {
    this.setState({ people: people });
    console.log("CDM Check", this.state.people);
  }
  render() {
    console.log("Render Called", this.state.people);
    return <PeopleList people={this.state.people} />;
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { people } from './people.js';
import {PeopleList} from './PeopleList';

class App extends Component {
  constructor(){
    super();
    this.state = {
        name: "People",
        People: []
    };
    console.log("check");
}

componentDidMount() {
    // const { people } = people;
    console.log("Mounting...");
    this.setState({ People: people });
}

render(){
    console.log("Rendering...")
    return <PeopleList className="peopleList" name={this.state.name} People={this.state.People} />;
      
}


}

export default App;

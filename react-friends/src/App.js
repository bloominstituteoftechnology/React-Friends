import React, { Component } from 'react';
import './App.css';
import { people } from './people.js'
import  { PeopleList }  from './PeopleList'

class App extends Component {
  constructor(){
    console.log(people);
    super();
    // this.state = {
    //   People: [],
    // };
  }

  componentWillMount() {
    this.setState({People: people});
  }

  render() {
    return (
      <div className="App">
        <h1>Hello React App...</h1>
        <PeopleList people={this.state.People} />
      </div>
    );
  }
}

export default App;

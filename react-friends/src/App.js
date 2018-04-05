import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PeopleList from "./PeopleList";
import {people} from './people.js' ;
// console.log(people)
class App extends Component {
  constructor(){
    super();
    this.state = {
      people: []
    };

  }

  // componentWillMount() {// getting deprecated.fires befor render.
  //   this.setState({ people });
  // }
  componentDidMount(){ // lifecycle method defacto.
    console.log('CDM called')
    this.setState({ people });// everything on state is mutable.
  }
  //every change in setState will call render.

  render() {
    console.log('Render called')
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <PeopleList people={this.state.people} />
        </div>
      </div>
    );
  }
}

export default App;

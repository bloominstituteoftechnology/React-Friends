import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  {people}  from './people.js';
import PeopleList from './PeopleList'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      people: [],
    };
  }

  componentDidMount(){
    const data = people;
    this.setState({people: data});
    // console.log(this.state.people);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">People's List</h1>
        </header>
        <PeopleList people={this.state.people}/>
      </div>
    );
  }
}

export default App;

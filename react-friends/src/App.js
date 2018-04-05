import React, { Component } from 'react';
import { people } from './people'
import { PeopleList } from './PeopleList'
import './App.css';

class App extends Component { // app class created 
    constructor() { // constructor created 
      super(); // super called
      this.state ={
        People: [] // People array created on the state. 
      };
    }
  
    componentDidMount(){ // component did mount 
      this.setState({ People: people });
     }
  
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <PeopleList Person={this.state.People}/>
          </header>
        </div>
      ); // PeopleList added with person set to this.state.People
    }
  }

export default App;

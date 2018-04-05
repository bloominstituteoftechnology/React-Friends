import React, { Component } from 'react';
import { people } from './people'
import { PeopleList } from './PeopleList'
import './App.css';

class App extends Component {
    constructor() {
      super();
      this.state ={
        People: [] // People array created on the state. 
      };
    }
  
    componentDidMount(){
      this.setState({ People: people });
     }
  
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <PeopleList Person={this.state.People}/>
          </header>
        </div>
      );
    }
  }

export default App;

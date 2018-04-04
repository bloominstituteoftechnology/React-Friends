import React, { Component } from 'react';
import PeopleListCSS from './PeopleList.css';
import { people } from './people.js';
import { PeopleList } from './PeopleList';

class App extends Component {
  constructor() {
    super();
    this.state ={
      People: []
    };
  }

  componentDidMount(){
    console.log('CDM');
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

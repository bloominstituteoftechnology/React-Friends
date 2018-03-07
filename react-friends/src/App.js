import React, { Component } from 'react';
import PeopleList from './PeopleList';
import { people } from './people';
import './index.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      People: [],
    }
  }

  componentDidMount(){
    this.setState({ People: people });
  }


  render() {
    return (
      <div className ='app'>
        <PeopleList people = {this.state.People} />
      </div>
    );
  }
}

export default App;

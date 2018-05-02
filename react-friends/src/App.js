import React, {Component}  from 'react';
import logo from './logo.svg';
import './App.css';
import {people} from './people.js'
import {PeopleList} from './components/PeopleList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    }
  }
  componentDidMount(){
    this.setState({ people: people}); // here we are setting empty people array to people array in people.js. 
  }

  render() {
    return (
      <div className="App">
        <PeopleList people = {this.state.people}/>
      </div>
    );
  }
}


export default App;

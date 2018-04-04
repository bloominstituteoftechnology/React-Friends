import React, { Component } from 'react';
import { render } from 'react-dom';
import people from './people';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    this.setState{{ people: people }};
  }

  render() {
    return (
      
    );
  }
}

export default App;

import React, {Component} from 'react';
import './Person.css';


class Person extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
    <div class="person">
      <span>{this.props.data.first_name}</span>
      <span> {this.props.data.last_name}</span>
      <span class="email"> {this.props.data.email}</span>
    </div>
    );
  }



}

export default Person;

import React, {Component} from 'react';
import './Person.css';


class Person extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
    <div>
      <span>{this.props.data.first_name} {this.props.data.last_name} {this.props.data.email}</span>
    </div>
    );
  }



}

export default Person;

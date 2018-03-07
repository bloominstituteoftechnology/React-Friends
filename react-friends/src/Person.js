import React, {Component} from 'react';


class Person extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
    <div>
      <span>{this.props.data.first_name} {this.props.data.last_name} {this.props.data.email}</span>
      <br />
    </div>
    );
  }



}

export default Person;

import React, { Component } from 'react';

export default class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {},
    };
  }
  componentDidMount() {
    this.setState({Person: this.props.person});
  }
  render() {
    return (
      <div>{this.state.person.name}</div>
    )
  }
};

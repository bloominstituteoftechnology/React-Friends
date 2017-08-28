import React, { Component } from 'react';
import './Person.css';
import { Friends } from './Friends';

export default class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {},
      friends: []
    };
    this.showFriendsHandler = this.showFriendsHandler.bind(this);
  }
  componentDidMount() {
    this.setState({
      person: this.props.person,
      friends: this.props.person.friends
    });
  }
  showFriendsHandler(obj) {
    console.log(obj);
  }
  render() {
    return (
      <div className="Person-Wrapper">
        <div className="Name-Header">
          {this.state.person.first_name} {this.state.person.last_name}
        </div>
        <div className="Email-Title">
          {this.state.person.email}
        </div>
        <Friends
          friends={this.state.friends}
          showFriendsHandler={this.showFriendsHandler}
        />
      </div>
    );
  }
}

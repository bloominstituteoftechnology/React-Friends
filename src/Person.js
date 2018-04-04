import React from 'react';
import Friends from './Friends.js';

export default class Person extends React.Component {
  state = {
    showFriends: false
  }

  handleClick = () => {
    this.setState({ showFriends: !this.state.showFriends });
  }

  render() {
    return (
      <div className="people-list__entry" onClick={this.handleClick}>
        <div className="people-list__person"><span>{this.props.first_name} {this.props.last_name}</span><span>{this.props.email}</span></div>
        <Friends show={this.state.showFriends} friends={this.props.friends} />
      </div>
    );
  }
}
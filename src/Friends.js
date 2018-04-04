import React from 'react';
import classNames from 'classnames';

export default class Friends extends React.Component {
  friendElements = () => this.props.friends.map((friend) => <div className="people-list__friend">{friend.firstName} {friend.lastName}</div>);

  render() {
    const classes = classNames({
      'people-list__friend-list': true,
      'people-list__friend-list--show': this.props.show
    });
    return (
      <div className={classes}>
        {this.friendElements()}
      </div>
    );
  }
}
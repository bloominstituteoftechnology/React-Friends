import React, { Component } from 'react';

class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      friends: props.myFriends
    }
  }

  toggleHidden(event) {
    console.log(this.state.id);
    this.state.hidden ? this.setState({hidden: false}) : this.setState({hidden: true})
  }

  render() {
    return (
      <div onClick={this.toggleHidden.bind(this)}>
        <h5>Friends:</h5>
        {this.state.friends.map((val, index) => <div key={index} className={this.state.hidden ? 'Friend-entry-hidden' : 'Friend-entry'}><div className="Friend-person">{val.firstName} {val.lastName} </div></div>)}
      </div>
    );
  }
};

export default FriendList;

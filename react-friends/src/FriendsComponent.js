import React, { Component } from "react";


class FriendsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: props.person,
      friends: props.person.friends
    };
  }

  render() {
    return (
        <div className="friend" >
        {this.state.friends.map(person => {
          return (
            <div key={person.firstName + person.lastName}>
              {/* anytime we have an array of elements, REACT NEEDS A KEY! for each elem*/}
              {person.firstName} {person.lastName}
            </div>
          );
        })}
        </div>
    )
  }
}

export default FriendsComponent;

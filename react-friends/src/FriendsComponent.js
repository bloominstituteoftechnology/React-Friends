import React, { Component } from "react";


class FriendsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: props.person,
      friends: props.person.friends,
      isHidden: false
    };
  }

  toggleHidden() {
    this.setState({
    isHidden: !this.state.isHidden
    })
  }

  render() {
    return (
      <div key={this.state.person.first_name + this.state.person.last_name}>
        {/* anytime we have an array of elements, REACT NEEDS A KEY! for each elem*/}
        <div onClick={this.toggleHidden.bind(this)} className="person">
          <div>{this.state.person.first_name} {this.state.person.last_name}</div>
          <div>{this.state.person.email}</div>
          {!this.state.isHidden && <div className="toggle fa fa-caret-square-o-down"></div>}
          {this.state.isHidden && <div className="toggle fa fa-caret-square-o-up"></div>}

        </div>
        <div className="friend" >
        {this.state.friends.map(person => {
          return (
            this.state.isHidden && <div key={person.firstName + person.lastName}>
              {/* anytime we have an array of elements, REACT NEEDS A KEY! for each elem*/}
              {person.firstName} {person.lastName}
            </div>
          );
        })}
        </div>
      </div>
    )
  }
}

export default FriendsComponent;

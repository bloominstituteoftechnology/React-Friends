import React, { Component } from "react";
import FriendsComponent from "./FriendsComponent";


class PeopleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        {this.props.people.map(person => {
          return (
              <FriendsComponent person={person} key={person.first_name + person.last_name} />
          );
        })}
      </div>
    );
  };
}

export default PeopleList;
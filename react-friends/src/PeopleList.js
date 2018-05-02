import React, { Component } from "react";
import FriendsComponent from "./FriendsComponent";


class PeopleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
    }
  }
  toggleHidden() {
    this.setState({
    isHidden: !this.state.isHidden
    })
  }
  render() {
    return (
      <div>
        {this.props.people.map(person => {
          return (
            <div key={person.first_name + person.last_name}>
              {/* anytime we have an array of elements, REACT NEEDS A KEY! for each elem*/}
              <div onClick={this.toggleHidden.bind(this)} className="person">
                <div>{person.first_name} {person.last_name}</div>
                <div>{person.email}</div>
              </div>
              {!this.state.isHidden && <FriendsComponent person={person} />}
            </div>
          );
        })}
      </div>
    );
  };
}

export default PeopleList;
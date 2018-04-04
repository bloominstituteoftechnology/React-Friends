import React from 'react';
import Person from './Person.js';

export default class PeopleList extends React.Component {

  peopleElements = () => this.props.people.map((person) => <Person {...person} />);

  render() {
    return (
      <div className="people-list">
        {this.peopleElements()}
      </div>
    );
  }
}
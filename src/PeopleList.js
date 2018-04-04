import React from 'react';
import Person from './Person.js';

export default class PeopleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
    console.log('props v');
    console.log(props);
    console.log('state v');
    console.log(this.state);
  }

  peopleElements = () => this.state.people.map((person) => <Person {...person} />);

  render() {
    return (
      <div className="people-list">
        {this.peopleElements()}
      </div>
    );
  }
}
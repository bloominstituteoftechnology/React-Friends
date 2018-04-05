import React from "react";

const PeopleList = props => props.people.map(peep => <Person {...peep} />);
export { PeopleList };

const Person = props => (
  <div>
    <p>
      Name: {props.first_name} {props.last_name}
    </p>
    <p>Email: {props.email}</p>
  </div>
);
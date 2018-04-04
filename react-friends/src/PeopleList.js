import React from "react";

const PeopleList = props => {
  // console.log(props);
  console.log(props.people);
  return (
    <div>
      {props.people.map(person => (
        <div>
          <div>{person.first_name}</div>
          <div>{person.last_name}</div>
          <div>{person.email}</div>
        </div>
      ))}
    </div>
  );
};

export default PeopleList;

import React from "react";

const PeopleList = props => {
  console.log("Props from PeopleList: ", props);
  return (
    <div>
      <h2>A list of people</h2>
      {props.people.map(person => {
        return (<div className="people" key={person.first_name}>
          <h4>{person.first_name}</h4>
          <h4>{person.last_name}</h4>
          <h4>{person.email}</h4>
          </div>
          );
      })}
    </div>

  );
};

export default PeopleList;
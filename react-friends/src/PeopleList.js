import React from "react";
import "./PeopleList.css";

const PeopleList = props => {
  console.log(props);
  return (
    <div>
      {props.people.map(person => {
        return (
          <div key={person.id} className="people-wrapper">
            <h2>
              {person.first_name} {person.last_name}
            </h2>
            <h3>{person.email}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default PeopleList;

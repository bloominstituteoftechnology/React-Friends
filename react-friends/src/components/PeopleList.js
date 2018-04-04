import React from "react";
import "../App.css";

export const PeopleList = props => {
  console.log(props);
  return (
    <div className="list">
      {props.people.map(person => {
        return (
          <div>
            <p>{person.first_name}</p>
            <p>{person.last_name}</p>
            <p>{person.email}</p>
          </div>
        );
      })}
    </div>
  );
};

import React from 'react';
import "./PeopleList.css";

const PeopleList = (props) => {
  return (
    <div className="People">
      {props.people.map((person) => {
        return (
          <div className="Person" key={person.id}>
            <div className="Name">{person.first_name}</div>
            <div className="Name">{person.last_name}</div>
            <div className="Email">{person.email}</div>
          </div>
        );
      })}
    </div>
  );
};

export default PeopleList;

import React from "react";

const PeopleList = props => {
  return (
    <div>
      {props.people.map(people => {
        return (
          <div key={people.first_name + people.last_name}>
            {/* anytime we have an array of elements, REACT NEEDS A KEY! for each elem*/}
            {people.first_name} {people.last_name}
          </div>
        );
      })}
    </div>
  );
};

export default PeopleList;

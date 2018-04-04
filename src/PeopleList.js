import React from 'react';

export const PeopleList = ({ people }) => {
  return (
    <ul>
        {people.map((person, i) => {
          return (
            <li key={i}>
              <h3>{`${person.first_name} ${person.last_name}`}</h3>
              <h4>{person.email}</h4>
            </li>
          );
        })}
    </ul>
  );
};

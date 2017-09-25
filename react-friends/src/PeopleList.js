import React from 'react';
import './PeopleList.css';

export const PeopleList = (props) => {
  return (
    <div className="container">
      {props.people.map((person => {
        return (
            <div className="item" key={person.id}>
              <p>{person.first_name}</p>
              <p>{person.last_name}</p>
              <p>{person.email}</p>
            </div> 
          )
      }))}
    </div>
  )
};
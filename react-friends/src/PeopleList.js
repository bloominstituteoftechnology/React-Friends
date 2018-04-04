import React from 'react';
import People from './People';
import './PeopleList.css';

export const PeopleList = (props) => {
  return (
    <div className="People-Wrapper">
      {props.people.map((person) => {
        return (
            <div className="Person">
              <h4>{person.first_name}</h4>
              <h4>{person.last_name}</h4>
              <div>{person.email}</div>
            </div>
          )
      })}
    </div>
  )
};
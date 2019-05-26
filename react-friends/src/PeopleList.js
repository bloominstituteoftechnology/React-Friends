import React from 'react';
import './PeopleList.css';

export const PeopleList = (props) => {
  return (
    <ul className="PeopleList">
      {props.people.map(person => {
        return (
          <li className="Person">
            <div className="Name-Header">{person.first_name}</div>
            <div className="Name-Header">{person.last_name}</div>
            <div className="Email-Title">{person.email}</div>
          </li>
        )
      })}
    </ul>
  )
}
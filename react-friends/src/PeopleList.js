import React from 'react';
import Person from './Person';
import './PeopleList.css';

export const PeopleList = (props) => {
  return (
    <div className="People-Wrapper">
      {props.people.map((person => {
        return <Person key={person.id} person={person} />
      }))}
    </div>
  )
}
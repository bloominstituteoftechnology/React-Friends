import React from 'react';
import Person from './Person';

export const PeopleList = (props) => {
  return (
    <div>
      {props.people.map((person => {
        return <Person key={person.id} person={person}/>
      }))}
    </div>
  )
};




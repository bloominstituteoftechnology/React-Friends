import React from 'react';

const PeopleList = props => {
  return (
  <div>{props.people.map((person, index) => {
    <div>{props.first_name}</div>
    console.log(person.last_name)
  })}</div>

  )
}

export default PeopleList;

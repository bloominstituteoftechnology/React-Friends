import React from 'react';

const PeopleList = props => {
  return (
    <div>{props.people.map((person, index) => {
      return <div>{`${person.first_name} ${person.last_name} ` }</div>;
    })}</div>
  )
}

export default PeopleList;
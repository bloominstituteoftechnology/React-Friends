import React from 'react';

const PeopleList = props => {
  return (
    <div>hello{props.people.map((person, index) => {
      <div>Hello</div>;
    })}</div>
  )
}

export default PeopleList;
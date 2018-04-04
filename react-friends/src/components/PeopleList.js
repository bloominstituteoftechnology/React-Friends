import React from 'react';

function PeopleList(props) {
  return props.people.map((person, i) => <div key={i}>{person.first_name + ' ' + person.last_name}</div>)
}

export default PeopleList;

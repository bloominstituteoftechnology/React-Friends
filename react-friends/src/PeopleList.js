import React from 'react';
import './PeopleList.css';

const PeopleList = (props) => {
  return (
    <ul className='PeopleList'>
      {props.people.map(person => {
        return (
          <li className='PeopleList__person'>
            <div>Name: {person.first_name} {person.last_name}</div>
            <div>Email: {person.email}</div>
            <div>Friends:</div>
            <ul className='PeopleList'>
              {person.friends.map(friend => {
                return <li className='PeopleList__friend'>{friend.firstName} {friend.lastName}</li>
              })}
            </ul>
          </li>
        )
      })}
    </ul>
  );
}

export default PeopleList;
import React from 'react';
import { FriendsButton } from './FriendsButton.js';

export const PeopleList = props => {
  return (
    <div>
      {props.people.map( (person, index) => (
        <div key={person + index} className='Person'>
          <p className='Person__attr'>{person.first_name}</p>
          <p className='Person__attr'>{person.last_name}</p>
          <p className='Person__attr'>{person.email}</p>
          <button id={person.id} onClick={() => FriendsButton()}>Friends</button>
        </div>
      ))}
    </div>
  )
}

// const FriendsButton = idNum => {
//   return (
//     <div>
//       {props.people.filter(person => person.id === id)}
//     </div>
//   )
// }

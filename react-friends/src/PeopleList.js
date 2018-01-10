import React from 'react';

export const PeopleList = (props) => {
    return (
      <ul>
        {props.people.map((person, i) => {
          return <li>
              <div>{person.first_name} {person.last_name}</div>

              <div>{person.email}</div>
            </li>
        })}

      </ul>
    )
}

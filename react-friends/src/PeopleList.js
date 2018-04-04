import React from 'react';
import './PeopleList.css';

export const PeopleList = (props) => {
    return (
        <ul className='PeopleList'>
            {props.people.map(person => {
                return (
                    <li className='PeopleList__person'>
                        <div>{person.first_name} {person.last_name}</div>
                        <div className='PeopleList__email'>{person.email}</div>
                    </li>
                );
            })}
        </ul>
    )
}
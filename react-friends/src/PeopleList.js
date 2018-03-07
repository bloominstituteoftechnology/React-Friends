import React from 'react';

export const PeopleList = (props) => {
    return (
        <ul className='PeopleList'>
            {props.people.map(person => {
                return (
                    <li>
                        <div>{person.first_name}</div>
                        <div>{person.last_name}</div>
                        <div>{person.email}</div>
                    </li>
                );
            })}
        </ul>
    )
}
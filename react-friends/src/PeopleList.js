import React from 'react';
import './PeopleList.css';

export const PeopleList =(props) => {
    return (
        <div className="Person">
            {props.people.map(person => {
                return (
                    <div className="Person__block" key={person.first_name + person.last_name}>
                        <div>{person.first_name}</div>
                        <div>{person.last_name}</div>
                        <div>{person.email}</div>
                    </div>
                )
            })}
        </div>
    )
};
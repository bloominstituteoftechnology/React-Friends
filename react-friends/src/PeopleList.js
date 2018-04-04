import React from 'react';
import { people } from './people';
import './PeopleList.css';

export const PeopleList = (props) => {
    return (
        <div className="people-wrapper">
            {props.people.map((person => {
                return (
                    <div className="person-wrapper">
                        <h3>{person.first_name} {person.last_name}</h3>
                        <h4>{person.email}</h4>
                    </div>
                )
            }))}
        </div>
    )
}

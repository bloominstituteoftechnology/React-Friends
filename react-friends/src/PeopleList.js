import React from 'react';
import { people } from './people';

export const PeopleList = (props) => {
    return (
        <div>
            {props.people.map((person => {
                return (
                    <div>
                        <h3>{person.first_name} {person.last_name}</h3>
                        <h4>{person.email}</h4>
                    </div>
                )
            }))}
        </div>
    )
}

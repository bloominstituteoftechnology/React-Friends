import React from 'react';

export const PeopleList = props => {
    return (
        <div>
            {props.people.map((person => {
                return (
                    <div>
                        <h4>First: {person.first_name}</h4>
                        <h4>Last: {person.last_name}</h4>
                        <div>Email: {person.email}</div>
                        <div>Occupation: {person.occupation}</div>
                    </div>
                )
            }))}
        </div>
    )
};
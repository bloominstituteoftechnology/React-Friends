import React from 'react';
import Person from './Person'

export const PeopleList = (props) => {
    return (
        <ul>
            {props.people.map((person) => {
                return <Person key={person.id} person={person}/>
            })}
        </ul>
        
    )
}
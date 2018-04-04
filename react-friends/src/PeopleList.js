import React from 'react';
import { people } from './people.js'
import './PeopleList.css'

export const PeopleList = (props) => {
    return (
        <div className= 'People-Wrapper'>
            {props.people.map((person => {
            return (
                <div>
                    <h3>{person.first_name}</h3>
                    <h2>{person.last_name}</h2>
                    <h4>{person.email}</h4>
                </div>
            )
            }))}
        </div>
    )
};
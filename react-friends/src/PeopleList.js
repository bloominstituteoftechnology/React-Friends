import React from 'react';
import people from './people';

export const PeopleList = props => {
    const { name, cities } =- props;
    return (
        <div className= "People_Wrapper">
            {props.people.map((person => {
                return (
                    <div>
                        <h4>{person.first_name}</h4>
                        <h4>{person.last_name}</h4>
                        <div>{person.email}</div>
                    </div>
                )
            }))}
        </div>
    )
};
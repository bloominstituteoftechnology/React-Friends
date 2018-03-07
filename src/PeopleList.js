import React from 'react';
import './PeopleList.css';

const PeopleList = props => {
    const { name , People } = props;
    return (
        <div className="People-Wrapper">
        {People.map(person => {
            return (
                <div>
                    <h4>{person.first_name}</h4>
                    <h4>{person.last_name}</h4>
                    <div>{person.email}</div>
                </div>
            )
        })}
    </div>
    )
}

export {PeopleList};
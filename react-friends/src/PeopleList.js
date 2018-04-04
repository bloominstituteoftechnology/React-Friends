import React from 'react';
import './PeopleList.css';

export const PeopleList = (props) => {
    return (
        <div className = "people-wrapper">
            {props.people.map((person,index) => {
                return (
                <div className = "person" key = {index}> {person.first_name}, {person.last_name}, {person.email} </div>
            )
            })}
        </div>
    )
}
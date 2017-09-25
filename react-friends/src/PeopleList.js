import React from 'react';
import './PeopleList.css'

export const PeopleList = (props) => {
    return (
        <div>
            {props.People.map((person) => ( 
            <div className="personInfo">
                <div>
                    <div className="name">{person.first_name}</div>
                    <div className="name">{person.last_name}</div>
                </div>
                    <div className="email">{person.email}</div>
            </div>
            ))}
        </div>
    )
}
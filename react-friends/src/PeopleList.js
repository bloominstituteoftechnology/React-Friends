import React, { Component } from 'react';
import './PeopleList.css';

export const PeopleList = (props) => {
    return (
        <div className="People-Wrapper">
            {props.people.map((person => {
                return (
                    <div className="Card">
                        <div className="Name">
                            <h4>{person.first_name}</h4>
                            <h4>{person.last_name}</h4>
                        </div>
                        <div className="Email">{person.email}</div>
                    </div>
                )
            }))}
        </div>
    )
};
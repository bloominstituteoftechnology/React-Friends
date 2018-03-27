import React, { Component } from 'react';
import { people } from './people.js';

export const PeopleList = (props) => {
    return (
        <div>
            {props.people.map((person, index) => {
                return (
                    <div key = {index}>
                        <div>{ props.people.first_name }</div>
                        <div>{ props.people.last_name }</div>
                        <div>{ props.people.email }</div>
                    </div>
                )
            })}
        </div>
    )
}
 
export default PeopleList;
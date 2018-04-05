import React from 'react';
import './PeopleList.css';

export const PeopleList = props => {
    return ( //extracts & returns first & last name & email
        <div class="People-list row"> 
            <div> {props.people.map( people => {
                return <div class="People-list"> '{people.first_name} {people.last_name}, <a href={`mailto:${people.email}`}>{people.email}</a> </div>
            })}
            </div>
        </div>
    )
}

// export {PeopleList};      // experimenting w export syntax

// <div class="col-sm-4">
//     {props.people.map( peoples => {
//     return <div class="People-list"> {peoples.first_name} {peoples.last_name}</div>
//     })}
// </div>
// <div class="col-sm-4">
//     {props.people.map( peoples => {
//     return <div class="People-list"> <a href={`mailto:${peoples.email}`}>{peoples.email}</a> </div>
//     })}
// </div>
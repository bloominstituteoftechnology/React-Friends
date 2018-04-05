import React from 'react';
import './PeopleList.css';

export const PeopleList = props => {
    return ( //extracts & returns first & last name & email
        <div class="row"> 
            <div> {props.people.map( peoples => {
                return <div class="People-list"> {peoples.first_name}, {peoples.last_name}, <a href={`mailto:${peoples.email}`}>{peoples.email}</a> </div>
            })}
            </div>
        </div>
    )
}
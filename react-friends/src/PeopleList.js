import React from 'react';

export const PeopleList = props => {
    return ( <div>
    {props.people.map( peoples => {
        return <div> {peoples.first_name}, {peoples.last_name}, {peoples.email} </div>
    })}
    </div>
    )
}


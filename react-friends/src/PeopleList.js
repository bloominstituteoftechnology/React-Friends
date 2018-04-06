import React from 'react';
 


const PeopleList = props => {
    return (
        <div>
        {props.people.map((person) => ( <div>
            <div key={person.id}>{`${person.first_name} ${person.last_name}`}</div>
            <div>{person.email}</div>
            </div>
        ))}
        </div>
    );
}; 

export default PeopleList;
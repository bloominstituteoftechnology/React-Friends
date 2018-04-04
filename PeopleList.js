import React from 'react';
import './PeopleList.css';

const PeopleList = (props) => {
    return (
        <div className='PeopleList'>
            {props.people.map((person) => {
                return (
                    <div className='PeopleList_person' key={person.id}>
                        <h3>{person.first_name} {person.last_name}</h3>
                        <p>{person.email}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default PeopleList;

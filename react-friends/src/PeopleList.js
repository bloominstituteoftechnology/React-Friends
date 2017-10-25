import React from 'react';
import './PeopleList.css';

const PeopleList = (props) => {
    return (
        <div>
            {props.people.map((person) => {
                return (
                    <div key={person.id} className="Person-container">
                        <h3>{person.first_name} {person.last_name}</h3>
                        <p>{person.email}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default PeopleList;
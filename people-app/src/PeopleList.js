import React from 'react';
import "./PeopleList.css";

const PeopleList = props => {
    const { name, People } = props;
    return (
        <div>
            <h2>Your favorite {name}</h2>
            {People.map(person => {
                return (
                    <div key={person.last_name}>
                    <ul className="person_List">
                     <li className="person_ListItem">{person.first_name}</li>
                     <li className="person_ListItem">{person.last_name}</li>
                     <li className="person_ListItem">{person.email}</li>
                    </ul>
                    </div>
                );
            })}
            </div>
    )
}

export {PeopleList};
import React from 'react';


const PeopleList = props => {
    const { name, People } = props;
    return (
        <div>
            <h2>Your favorite {name}</h2>
            {People.map(person => {
                return (
                    <div key={person.last_name}>
                    <ul>
                     <li className="listItem">{person.first_name}</li>
                     <li className="listItem">{person.last_name}</li>
                     <li className="listItem">{person.email}</li>
                    </ul>
                    </div>
                );
            })}
            </div>
    )
}

export {PeopleList};